import React, { useEffect, useRef, useState } from 'react';
import NoteBlock from './NoteBlock';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faLink, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import LinkBlock from './LinkBlock';
import BudgetBlock from './BudgetBlock';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';



const BlockContainer = styled.div`
    width: 100%;
    padding: 15px 10px 10px 10px;
    position: relative;

    display: ${props => props.display || "block"};

    & .item-container{
        display: ${props => props.display || "block"};
        background-color: 'red' !important;
    }
`

const DeleteBlock = styled.button`
    border: none;
    background: none;
    outline: none;
    color: #B0B0B0;
    margin: 10px;
    position: absolute;
    top: 5px;
    right: 5px;
    transition: 0.1s opacity ease-in;

    &:hover {
        color: #081736;
    }
`

const BlockTitle = styled.h1`
    margin-left: 10px;
    font-family: "Sen", sans-serif;
    width: auto;
    font-weight: 600;
    font-size: 1.3em;
    color: #081736;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    padding: 5px 5px 3px 0px;
    display: inline;
    /* cursor: text; */
    transition: 0.1s all ease-in;

    /* &:hover {
        border-color: #D6D6D6;
    }

    &:focus {
        outline: none;
        border-color: #D6D6D6;
    } */
`


const Block = (props) => {
    const [ blocks, setBlocks ] = useState(
        {
            'note': <NoteBlock item={props.item}/>,
            'links': <LinkBlock item={props.item}/>,
            'budget': <BudgetBlock item={props.item}/>
        }
    )

    const [display, setDisplay] = useState('block');
    const [trip, setTrip] = useState(props.trip);

    const icons = {
        'note': faNoteSticky,
        'links': faLink,
        'budget': faDollarSign
    }

    useEffect(() => {
        console.log(props)
        setBlocks(
            {
                'note': <NoteBlock id={props.id} trip={trip} item={props.item}/>,
                'links': <LinkBlock id={props.id} trip={trip} item={props.item}/>,
                'budget': <BudgetBlock id={props.id} trip={trip} item={props.item}/>
            }
        )
    }, [props.item])

    useEffect(() => {
        setTrip(props.trip)
    }, [props.trip])

    function handleDelete(e) {
        deleteBlock()
    }

    async function deleteBlock() {
        const tripRef = doc(db, "trips", props.id);
        const docSnap = await getDoc(tripRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            var tripResponse = docSnap.data();
            console.log('deleteblock')
            console.log(tripResponse.blocks.length);

            const blockIndex = tripResponse.blocks.findIndex(b => b.created === props.item.created);

            // Create a new array without the list at the specified index
            var updatedBlocks = [...tripResponse.blocks];
            updatedBlocks.splice(blockIndex, 1);

            // Update the document in Firestore with the new array of lists
            await updateDoc(tripRef, { blocks: updatedBlocks }).then(() => {
                props.addToHidden(props.item.created)
            }).catch((error) => console.log(error.message));
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }          
    }

    return (
        <BlockContainer display={display}>
            {props.item.content !== null ?
            <>
                <FontAwesomeIcon icon={icons[props.item.type]} />
                <BlockTitle>{props.item.title}</BlockTitle>
                <DeleteBlock onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash}/>
                </DeleteBlock>
                {blocks[props.item.type]}
            </>
            :
            <></>
            }
        </BlockContainer>
    );
};

export default Block;
