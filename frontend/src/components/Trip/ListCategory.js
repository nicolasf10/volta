import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DetailsContent from './DetailsContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteConfirm from '../DeleteConfirm';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';


const ListContainer = styled.div`

`

const CategoryContainer = styled.div`
    background-color: #fff;
    position: relative;
    margin: 15px 15px;
    padding: 0;
    border-radius: 10px;
    width: 300px;
    height: 400px;
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.21); 
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.21);
    perspective: 1000px;

    transition: transform 0.2s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }

    &:hover .icons-container {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
        opacity: 1;
    }
`

const Background = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
`

const CategoryTitle = styled.h1`
    position: absolute;
    left: 15px;
    bottom: 7.5px;
    color: #000;
    background-color: #fff;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.3em;
    font-family: "Sen", sans-serif;
    font-weight: 600;
    max-width: calc(100% - 30px);
`

const CategoryDetails = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200, .3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    justify-content: center;
    align-items: center;
`

const IconsContainer = styled.div`
    font-size: 1.3em;
    display: none;
    color: #000;
    position: absolute;
    opacity: 0;
    transition: all 0.3s ease;
    top: 15px;
    right: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 100px;
    width: 40px;
    height: 40px;
    padding: 5px;

    &:hover {
        background-color: #fff;
    }
`


function ListCategory(props) {
    const [ list, setList ] = useState(props.list);
    const [ show, setShow ] = useState('none');
    const [ showDelete, setShowDelete ] = useState(false);


    useEffect(() => {
        console.log(props);
        setList(props.list);
    }, [])
    
    const handleChildElementClick = (e) => {
        e.stopPropagation()
        setShowDelete(!showDelete);
    }

    const wrapperSetShow = useCallback(val => {
        setShow(val);
    }, [setShow]);

    const toggleDeleteShow = useCallback(() => {        
        setShowDelete(false);
    }, [setShowDelete]);

    const handleDelete = useCallback(() => {        
        deleteList();
    }, [setShowDelete]);

    async function deleteList() {
        const tripRef = doc(db, "trips", props.id);
        const docSnap = await getDoc(tripRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            var tripResponse = docSnap.data()

            const listIndex = tripResponse.lists.findIndex(l => l.title === list.title);

            // Create a new array without the list at the specified index
            var updatedLists = [...tripResponse.lists];
            updatedLists.splice(listIndex, 1);


            console.log(" **************** ")
            console.log(listIndex)
            console.log(updatedLists)
            console.log(" **************** ")


            // Update the document in Firestore with the new array of lists
            await updateDoc(tripRef, { lists: updatedLists }).then(
                setShowDelete(false)
            ).then(props.deleteList(updatedLists)).catch((error) => console.log(error.message));
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }          
    }

    return (
        <ListContainer>
            <CategoryContainer onClick={() => setShow('flex')} background={list.img}>
                <Background src={list.img} alt={list.title} />
                <IconsContainer onClick={(e) => handleChildElementClick(e)} style={{zIndex: 10}} className='icons-container'>
                    <FontAwesomeIcon icon={faTrash} className='trash-icon'/>
                </IconsContainer>
                <CategoryTitle>{list.title}</CategoryTitle>
            </CategoryContainer>
            <CategoryDetails style={{display: show}}>
                <DetailsContent refreshTrip={props.refreshTrip} updateTrip={props.updateTrip} trip={props.trip} id={props.id} list={list} parentStateSetter={wrapperSetShow} />
            </CategoryDetails>
            {
                showDelete ?
                    <DeleteConfirm handleDelete={handleDelete
                    } parentCallback={toggleDeleteShow} list={list} />
                :
                    <></>
            }
        </ListContainer>
    );
}

export default ListCategory;
