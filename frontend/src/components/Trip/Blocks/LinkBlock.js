import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLink, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

const BlockContainer = styled.div`
`

const NewLink = styled.button`
    border: none;
    background: none;
    margin-top: 10px;
    text-align: left;
    font-family: "Sen", sans-serif;
    color: #505050;
    transition: 0.1s all ease-in-out;

    &:hover {
        color: #000;
    }
`

const Items = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 10px;
`

const Item = styled.div`
    margin: 5px 0px;
    background: none;
    border-radius: 5px;
    padding: 5px 5px;
    border: 2px solid transparent;
    transition: 0.1s ease-in all;
    display: flex;
    flex-direction: row;
    align-items: center;

    /* -webkit-box-shadow: 5px 5px 15px -4px rgba(0,0,0,0.21); 
    box-shadow: 5px 5px 15px -4px rgba(0,0,0,0.21); */

    &:hover {
        border-color: #C6C6C6;

        .icons {
            display: inline-flex;
            flex-direction: row;
        }
    }
`

const Link = styled.a`
    text-decoration: none;
    font-style: italic;
    color: #1746A2;
`

const ItemIcons = styled.div`
    border: 1px gold;
    display: none;
    margin-left: auto;
    margin-right: 5px;

    & * {
        margin: 0px 5px;
    }
`

const NewLinkForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 10px 0px;
    font-family: "Sen", sans-serif;

    & input {
        background: none;
        border: none;
        border-bottom: 1.5px solid #686868;
        margin: 7px 0px;
        transition: 0.1s ease all;
    }

    & input:focus {
        outline: none;
        border-color: #081736;
    }
`

const LabelInput = styled.input`

`

const LinkInput = styled.input`

`

const SaveLink = styled.button`
    margin-right: 2.5px;
    background-color: #1746A2;
    color: #fff;

`

const CancelLink = styled.button`
    margin-left: 2.5px;
    background-color: #5A5A5A;
    color: #fff;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3px;
    transition: 0.1s ease-in all;
    width: 100%;

    & * {
        width: 50%;
        border-radius: 5px;
        border: none;
        font-family: "Sen", sans-serif;
    }
`

function addHttpsToUrl(url) {
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }
    return url;
  }
  


function LinkBlock(props) {
    const [trip, setTrip] = useState(props.trip)
    const [item, setItem] = useState(props.item)
    const [ makingNew, setMakingNew ] = useState(false);
    const [ labelInput, setLabelInput ] = useState('');
    const [ linkInput, setLinkInput ] = useState('');
    const [ openNew, setOpenNew ] = useState(false);

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        console.log(props.item);
        setItem(props.item);
        
    }, [props.trip, props.item])

    function newLink(e) {
        e.preventDefault();

        setItem({
            type: item.type,
            title: item.title,
            content: [...item.content, {
                label: labelInput,
                link: addHttpsToUrl(linkInput)
            }]
        })

        setLabelInput('');
        setLinkInput('');
        setOpenNew(false);
    }

    function cancelLink(e) {
        e.preventDefault();
        setLabelInput('');
        setLinkInput('');
        setOpenNew(false);
    }

    function openEdit(item, index) {
        // console.log('wok');
        setOpenNew(true);
        setLabelInput(item.label);
        setLinkInput(item.link);

        // setItem({
        //     type: item.type,
        //     title: item.title,
        //     content: [item.content.slice(0, index).concat(item.content.slice(index+1))]
        // })
    }

    return (
        <BlockContainer>
            { Array.isArray(item.content) ?
                <Items>
                    {
                        item.content.map((item, index) => {
                            return(
                                <Item key={index}>
                                    <Link target="_blank" href={item.link}>{item.label}</Link>
                                    <ItemIcons className='icons'><FontAwesomeIcon onClick={() => openEdit(item, index)} icon={faPencil}/><FontAwesomeIcon icon={faTrash}/></ItemIcons>
                                </Item>
                            )
                        })
                    }
                    <NewLink onClick={() => setOpenNew(!openNew)}><FontAwesomeIcon icon={faPlus} /> Add link</NewLink>
                </Items>
            :
                <></>
            }
            {
                openNew ? 
                    <NewLinkForm>
                        <LabelInput type="text" value={labelInput} onChange={(e) => setLabelInput(e.target.value)} placeholder="Label" />
                        <LinkInput type="email" value={linkInput} onChange={(e) => setLinkInput(e.target.value)} placeholder="Link address (ex. https://www.google.com/)" />
                        <Buttons className='note-buttons'>
                            <SaveLink type="submit" onClick={newLink}>Save</SaveLink>
                            <CancelLink onClick={cancelLink}>Cancel</CancelLink>
                        </Buttons>
                    </NewLinkForm>
                :
                    <></>
            }
        </BlockContainer>
    );
}

export default LinkBlock;
