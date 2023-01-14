import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DetailsContent from './DetailsContent';


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


function NewList(props) {
    const [ list, setTrip ] = useState(props.trip);
    const [ show, setShow ] = useState('none');

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
    }, [])

    return (
        <NewListContainer>
            <NewIcon className="fa fa-solid fa-plus"></NewIcon>
            <NewTitle>New List</NewTitle>
        </NewListContainer>
    );
}

export default NewList;
