import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

const BlockContainer = styled.div`
    height: 160px;
`

const NoteArea = styled.textarea`
    background-color: #F4F4F4;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;
    resize: none;
    width: 90%;
    height: 140px;
    margin-top: 7px;
    font-family: "Roboto", sans-serif;

    &:focus {
        outline: 2px solid #666;
        border: none;
        height: 110px;

        & + div {
            display: flex;
            flex-direction: row;
            opacity: 1;
        }
    }
`

const SaveNotes = styled.button`
    margin-right: 2.5px;
    background-color: #1746A2;
    color: #fff;
`

const CancelNotes = styled.button`
    margin-left: 2.5px;
    background-color: #5A5A5A;
    color: #fff;
`

const Buttons = styled.div`
    display: none;
    opacity: 0;
    margin-top: 3px;
    transition: 0.1s ease-in all;
    width: calc(90% + 2px);

    & * {
        width: 100%;
        border-radius: 5px;
        border: none;
        font-family: "Sen", sans-serif;
    }
`


function NoteBlock(props) {
    const [trip, setTrip] = useState(props.trip);
    const [item, setItem] = useState(props.item);
    const [ notes, setNotes ] = useState('');

    useEffect(() => {
        console.log(props);
        console.log('IM here')
        setTrip(props.trip);
        setItem(props.item);
        setNotes(props.item.content);
        
    }, [props.trip, props.item])

    function handleChange(e) {
        setNotes(e.target.value);
    }
    
    async function handleSave() {
        console.log('Saving note');

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
                    content: notes,
                    created: item.created
                })
            }
        }
        
        await updateDoc(tripRef, { blocks: newBlocks }).catch((error) => console.log(error.message));
    }


    return (
        <BlockContainer>
            <NoteArea onChange={handleChange} onBlur={() => handleSave()} value={notes} placeholder='Write some notes here ;)'/>
            <Buttons className='note-buttons'>
                <SaveNotes>Save</SaveNotes>
                {/* <CancelNotes onClick={() => { console.log("button clicked");}}>Cancel</CancelNotes> */}
            </Buttons>
        </BlockContainer>
    );
}

export default NoteBlock;
