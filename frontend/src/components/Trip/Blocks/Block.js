import React, { useEffect, useRef, useState } from 'react';
import NoteBlock from './NoteBlock';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faLink, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import LinkBlock from './LinkBlock';
import BudgetBlock from './BudgetBlock';



const BlockContainer = styled.div`
    width: 100%;
    padding: 10px;
    position: relative;
`

const DeleteBlock = styled.div`
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

const BlockTitle = styled.input`
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
    cursor: text;
    transition: 0.1s all ease-in;

    &:hover {
        border-color: #D6D6D6;
    }

    &:focus {
        outline: none;
        border-color: #D6D6D6;
    }
`


const Block = (props) => {  
    const [ blocks, setBlocks ] = useState(
        {
            'note': <NoteBlock item={props.item}/>,
            'links': <LinkBlock item={props.item}/>,
            'budget': <BudgetBlock item={props.item}/>
        }
    )

    const icons = {
        'note': faNoteSticky,
        'links': faLink,
        'budget': faDollarSign
    }

    useEffect(() => {
        console.log(props)
        setBlocks(
            {
                'note': <NoteBlock item={props.item}/>,
                'links': <LinkBlock item={props.item}/>,
                'budget': <BudgetBlock item={props.item}/>
            }
        )
    }, [props.item])

    return (
        <BlockContainer>
            {props.item.content ?
            <>
                <FontAwesomeIcon icon={icons[props.item.type]} />
                <BlockTitle value={props.item.title}/>
                <DeleteBlock>
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
