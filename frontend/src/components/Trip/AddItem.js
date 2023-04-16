import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';


const AddContainer = styled.div`
    border: 1px #D6D6D6 solid;
    border-radius: 10px;
    height: 50px;
    color: #838383;
    margin-bottom: 20px;
    padding-left: 15px;
    display: flex;
    flex-direction: row;

    &:hover {
        background-color: #E8E8E8;
        cursor: pointer;
    }
`

const AddContainerForm = styled.div`
    border: 1px #D6D6D6 solid;
    border-radius: 10px;
    height: 50px;
    color: #838383;
    margin-bottom: 20px;
    padding-left: 15px;
    display: flex;
    flex-direction: row;

    &:hover {
        cursor: pointer;
    }
`

const AddTitle = styled.h1`
    font-size: 1.05rem;
    line-height: 50px;
    text-align: left;
    /* background-color: red; */
    & i {
        margin-right: 20px;
    }
`

const AddInput = styled.input`
    background: none;
    outline: none;
    font-size: 1.1em;
    font-weight: 600;
    border: none;
    font-family: "Sen", sans-serif;
    color: #081736;
    width: 80%;

    &::placeholder {
        color: #D1D1D1;
    }
`

const AddButtons = styled.div`
    display: flex;
    flex-direction: row;
`

const AddButton = styled.button`
    background: none;
    border: none;
    padding: 0px 5px;
    color: #081736;
    font-size: 1.2em;
`


function AddItem(props) {
    const [ newForm, setNewForm ] = useState(false);
    const [ title, setTitle ] = useState('');

    function handleAdd(e) {
        if (title === '') {
            alert('To-do title is empty...')
        } else {
            setNewForm(false);

            const tripRef = doc(db, "trips", props.id);
            updateDoc(tripRef, {
                checklist: arrayUnion({
                    assigned: null,
                    isAssigned: false,
                    status: 'to-do',
                    title: title
                })}).then(() => {
                console.log("Item added")
            }).catch(error => console.log(error.message));
            
            props.addItem(
                {
                    assigned: null,
                    isAssigned: false,
                    status: 'to-do',
                    title: title
                }
            )
            setTitle('');
        }
    }

    function handleCancel(e) {
        setNewForm(false);
        setTitle('');
    }

    return (
        <>
            {
                !newForm ? 
                <AddContainer onClick={() => setNewForm(true)}>
                    <AddTitle><i class="fa fa-solid fa-plus"></i>New</AddTitle>
                </AddContainer>
                :
                <AddContainerForm>
                    <AddInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Untitled" type="text" />
                    <AddButtons>
                        <AddButton onClick={handleAdd}>
                            <FontAwesomeIcon icon={faCheck} />
                        </AddButton>
                        <AddButton onClick={handleCancel}>
                            <FontAwesomeIcon icon={faXmark} />
                        </AddButton>
                    </AddButtons>
                </AddContainerForm>
            }
        </>
    );
}

export default AddItem;