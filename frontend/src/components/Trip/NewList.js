import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DetailsContent from './DetailsContent';
import Popup from 'reactjs-popup';
import EmojiPicker from 'emoji-picker-react';
import EmojiImg from '../EmojiImg';
import ListImageSearch from './ListImageSearch';


const NewListContainer = styled.div`
    width: 300px;
    height: 400px;
    border: 1px #D6D6D6 solid;
    border-radius: 10px;
    color: #838383;
    position: relative;
    margin: 15px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #E8E8E8;
        cursor: pointer;
    }
`

const NewTitle = styled.h1`
    font-size: 1.4em;
    font-family: "Sen", sans-serif;
    text-align: center;
    font-weight: 600;
`

const NewIcon = styled.i`
    font-size: 1.5em;
    margin-bottom: 20px;
`

const ListForm = styled.form`
    padding: 10px;
    width: 100%;
    /* background-color: aliceblue; */
`

const FormTitle = styled.h3`
    font-family: "Lora", sans-serif;
    font-weight: 600;
`

const FormMainInputs = styled.div`
    display: flex;
    align-items: center;
`

const ListName = styled.input`
    margin-right: 20px;
    border: none;
    height: 35px;
    color: #242424;
    font-family: "Sen", sans-serif;
    font-size: 1.3em;
    border-bottom: 2px solid rgb(200, 200, 200, 0.8);
    transition: all ease-in 0.2s;

    &::placeholder {
        color: rgb(200, 200, 200, 0.8);
        font-family: "Sen", sans-serif;
        /* border-bottom: 3px solid red; */
        /* font-size: 2em; */
    }
    
    &:focus {
        outline: none;
        border-bottom: 2px solid #1746A2;
    }
`

const FormSubmit = styled.button`
    background-color: #1746A2;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin-top: 10px;
    padding: 5px 10px;
    font-family: "Sen", sans-serif;
`

const EmojiContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    transition: 0.15s ease;
    border-radius: 10px;
    cursor: pointer;
    font-size: 2.5em;

    & span {
        line-height: 50px;
    }

    &:hover {
        background-color: rgba(200, 200, 200, 0.5);
    }
`

const ImageSearchBox = styled.div`
    margin-top: 10px;
`

const SearchInput = styled.input`

`

const SearchImageButton = styled.button`

`


var emojis = [
    '🌎', '🛩️', '🗽', '🧳', '🏛️'
];


function NewList(props) {
    const [ list, setTrip ] = useState(props.trip);
    const [ show, setShow ] = useState('none');
    const [ emoji, setEmoji ] = useState(emojis[Math.floor(Math.random() * emojis.length)]);

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
    }, [])

    const onSubmit = (closing) => {
        closing()
    }

    const contentStyle = {borderRadius:'10px', width: '700px', height: '300px', maxWidth: '90%'};


    return (
        <Popup contentStyle={contentStyle} className='popup form-modal' nested trigger={
            <NewListContainer>
                <NewIcon className="fa fa-solid fa-plus"></NewIcon>
                <NewTitle>New List</NewTitle>
            </NewListContainer>
        } modal>
            {close => (
                <ListForm onSubmit={(event) => event.preventDefault()}>
                    <FormTitle>New list</FormTitle>
                    <FormMainInputs>
                    <ListName placeholder="List name" type='text'/>
                        <Popup
                            trigger={open => (
                                <EmojiContainer><EmojiImg size="40px" emoji={emoji}/></EmojiContainer>
                                // <button className="button">{emoji}</button>
                            )}
                            position="right center"
                            nested
                            // closeOnDocumentClick
                        >
                            <div>
                                <EmojiPicker onEmojiClick={(emoji) => setEmoji(emoji.emoji)} />
                            </div>
                        </Popup>
                    </FormMainInputs>
                    <ListImageSearch />
                    <FormSubmit onClick={() => onSubmit(close)}>Save</FormSubmit>
                </ListForm>
            )}
        </Popup>
    );
}

export default NewList;
