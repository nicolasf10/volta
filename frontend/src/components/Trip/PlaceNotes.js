import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const NotesContainer = styled.div`
    font-family: "Sen", sans-serif;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
`

const TextArea = styled.textarea`
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    font-size: 16px;
    line-height: 1.5;
`

function PlaceNotes(props) {
    const [ item, setItem ] = useState(props.item);

    useEffect(() => {
        console.log(item)
        setItem(props.item);
    }, [])

    //test
    return (
        <NotesContainer>
            <TextArea placeholder="Add notes, links, etc."/>
        </NotesContainer>
    );
}

export default PlaceNotes;
