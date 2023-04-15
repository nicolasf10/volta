import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLink, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

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

    async function newLink(e) {
        e.preventDefault();

        const tripRef = doc(db, "trips", props.id);
        const docSnap = await getDoc(tripRef);
        var currentTrip = docSnap.data();
        var newBlocks = new Array();
        
        for (let i = 0; i < currentTrip.blocks.length; i++) {
            if (currentTrip.blocks[i].created !== item.created) {
                newBlocks.push(currentTrip.blocks[i])
            } else {
                newBlocks.push({
                    type: item.type,
                    title: item.title,
                    content: [...item.content, {
                        label: labelInput,
                        link: addHttpsToUrl(linkInput)
                    }],
                    created: item.created
                })
            }
        }
        
        await updateDoc(tripRef, { blocks: newBlocks }).catch((error) => console.log(error.message));



        setItem({
            type: item.type,
            title: item.title,
            content: [...item.content, {
                label: labelInput,
                link: addHttpsToUrl(linkInput)
            }],
            created: item.created
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

    // function openEdit(item, index) {
    //     // console.log('wok');
    //     setOpenNew(true);
    //     setLabelInput(item.label);
    //     setLinkInput(item.link);

    //     // setItem({
    //     //     type: item.type,
    //     //     title: item.title,
    //     //     content: [item.content.slice(0, index).concat(item.content.slice(index+1))]
    //     // })
    // }

    async function handleDelete(created_id, title) {
        const tripRef = doc(db, "trips", props.id);
        const docSnap = await getDoc(tripRef);
        var currentTrip = docSnap.data();
        var newBlocks = new Array();
        var newLink;
        var newContent = [];
        
        for (let i = 0; i < currentTrip.blocks.length; i++) {
            console.log(created_id)
            if (currentTrip.blocks[i].created !== created_id) {
                newBlocks.push(currentTrip.blocks[i])
            } else {
                newLink = currentTrip.blocks[i];
                console.log(newLink);
                console.log(created_id)
                for (let n = 0; n < newLink.content.length; n++) {
                    if (newLink.content[n].title !== title) {
                        newContent.push(newLink.content[n])
                    }
                }
                newLink.content = newBlocks;
                newBlocks.push(newLink);
            }
        }
        
        await updateDoc(tripRef, { blocks: newBlocks }).catch((error) => console.log(error.message));

        setItem({
            type: item.type,
            title: item.title,
            content: newBlocks,
            created: item.created
        })
    }

    return (
        <BlockContainer>
            { Array.isArray(item.content) ?
                <Items>
                    {
                        item.content.map((i, index) => {
                            return(
                                <Item key={index}>
                                    <Link target="_blank" href={i.link}>{i.label}</Link>
                                    {/* <ItemIcons className='icons'><FontAwesomeIcon onClick={() => openEdit(item, index)} icon={faPencil}/><FontAwesomeIcon icon={faTrash}/></ItemIcons> */}
                                    <ItemIcons className='icons'><FontAwesomeIcon onClick={() => handleDelete(item.created, i.title)} icon={faTrash}/></ItemIcons>
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
