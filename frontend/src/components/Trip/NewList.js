import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DetailsContent from './DetailsContent';
import Popup from 'reactjs-popup';
import EmojiPicker from 'emoji-picker-react';
import EmojiImg from '../EmojiImg';
import ListImageSearch from './ListImageSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';


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
    height: 100%;
    display: flex;
    flex-direction: column;
    /* background-color: aliceblue; */
`

const FormTitle = styled.h3`
    margin-left: 10px;
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
    margin-left: 10px;
    height: 35px;
    width: 300px;
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

    @media (max-width: 450px) {
        width: 190px;
    }
`

const FormSubmit = styled.button`
    background-color: #1746A2;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin-top: auto;
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

const BackContainer = styled.div`
    margin: 10px;
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
    font-family : "Sen", "sans-serif";
    background-color: #F1F1F1;
    z-index: 4;
    width: 40px;
    height: 40px;
    padding: 5px 10px;
    transition: 0.25s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;


    &:hover {
        background-color: #F1F1F1;
        border-radius: 100%;
    }
`


var emojis = [
    '🌎', '🛩️', '🗽', '🧳', '🏛️'
];


function NewList(props) {
    const [ title, setTitle ] = useState('');
    const [ emoji, setEmoji ] = useState(emojis[Math.floor(Math.random() * emojis.length)]);
    const [ img, setImg ] = useState('');
    const [ valid, setValid ] = useState(true);

    async function onSubmit (closing, saveTrip) {
        const tripRef = doc(db, "trips", props.id);
        const docSnap = await getDoc(tripRef);
        const currentLists = docSnap.data().lists;
        console.log(currentLists);
        var allow = true;

        for (let i = 0; i < currentLists.length; i++) {
            if (currentLists[i].title === title) {
                allow = false;
            }
        }

        if (allow) {
            if (img !== '' && title !== '') {
                updateDoc(tripRef, {
                    lists: arrayUnion({
                        title: title,
                        emoji: emoji,
                        img: img,
                        items: []
                    })}).then(() => {
                console.log("List added");
                closing();
                setTitle('');
                if (valid) {
                    console.log(' omgom')
                    saveTrip({
                        title: title,
                        emoji: emoji,
                        img: img,
                        items: []
                    });
                }
                console.log(valid)
                setValid(false);
                setImg('');
                setTitle('')
                }).catch(error => console.log(error.message));
            } else {
                alert('Please select all fields')
            }
        } else {
            alert(`You already have a list called ${title}`)
        }
    }

    const updateImg = useCallback((newUrl) => {
        setImg(newUrl)
    }, []);

    const handleChange = e => {
        setValid(true);
        setTitle(e.target.value);
    }

    const contentStyle = {borderRadius:'10px', width: '700px', height: '500px', maxWidth: '90%'};

    const contentStyleEmoji = {borderRadius:'10px', width: "363px", height: "447.5px"};

    return (
        <Popup contentStyle={contentStyle} className='popup form-modal' nested trigger={
            <NewListContainer>
                <NewIcon className="fa fa-solid fa-plus"></NewIcon>
                <NewTitle>New List</NewTitle>
            </NewListContainer>
        } modal>
            {close => (
                <ListForm onSubmit={(event) => event.preventDefault()}>
                    <BackContainer onClick={close}>
                        <FontAwesomeIcon icon={faXmark} />
                    </BackContainer>
                    <FormTitle>New list</FormTitle>
                    <FormMainInputs>
                        <ListName value={title} onChange={handleChange} placeholder="List name" type='text'/>
                        <Popup
                            trigger={open => (
                                <EmojiContainer><EmojiImg size="40px" emoji={emoji}/></EmojiContainer>
                                // <button className="button">{emoji}</button>
                            )}
                            position="bottom center"
                            nested
                            contentStyle={contentStyleEmoji} 
                        >
                            <div>
                                <Picker data={data} onEmojiSelect={(emoji) => setEmoji(emoji.native)} />
                                {/* <EmojiPicker onEmojiClick={(emoji) => setEmoji(emoji.emoji)} /> */}
                            </div>
                        </Popup>
                    </FormMainInputs>
                    <ListImageSearch parentCallback={updateImg}/>
                    <FormSubmit onClick={() => onSubmit(close, props.saveList)}>Save</FormSubmit>
                </ListForm>
            )}
        </Popup>
    );
}

export default NewList;
