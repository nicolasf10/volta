import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
        width: 50%;
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

    return (
        <BlockContainer>
            <NoteArea onChange={handleChange} value={notes} placeholder='Write some notes here ;)'/>
            <Buttons className='note-buttons'>
                <SaveNotes>Save</SaveNotes>
                <CancelNotes>Cancel</CancelNotes>
            </Buttons>
        </BlockContainer>
    );
}

export default NoteBlock;
