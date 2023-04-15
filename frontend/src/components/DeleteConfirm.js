import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const DeleteModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 100;
    background-color: rgba(200, 200, 200, .3);
`

const DeleteBox = styled.div`
    width: 300px;
    height: 140px;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 10px;
`

const DeleteTitle = styled.h4`
    font-family: "Lora", sans-serif;

`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    font-family: "Sen", sans-serif;
`

const DeleteButton = styled.button`
    margin: 3px 0px;
    background: none;
    border: 2px solid #ff2929;
    color: #ff2929;
    transition: 0.15s all ease-in;
    border-radius: 4px;
    
    &:hover {
        background-color: #ff2929;
        color: #fff;
    }
`

const CancelButton = styled.button`
    margin: 3px 0px;
    background: none;
    border-radius: 4px;
    transition: 0.15s all ease-in;
    color: #333333;
    border: 2px solid #333333;

    &:hover {
        background-color: #333333;
        color: #fff;
    }
`


function DeleteConfirm(props)
{
    // const [ trip, setTrip ] = useState(props.trip)

    // useEffect (() => {
    //     setTrip(props.trip)
    // }, [])

    const handleDelete = (e) => {
        if (props.deleteAction) {
            props.deleteAction()
        }
        props.handleDelete()
        e.stopPropagation()
    }

    const handleCancel = (e) => {
        props.parentCallback()
        e.stopPropagation()
    }

    return (
        <DeleteModal onClick={(e) => e.stopPropagation()}>
            <DeleteBox>
                <DeleteTitle>Are you sure?</DeleteTitle>
                <ButtonsContainer>
                    <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                    <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                </ButtonsContainer>
            </DeleteBox>
        </DeleteModal>
    );
}


export default DeleteConfirm;