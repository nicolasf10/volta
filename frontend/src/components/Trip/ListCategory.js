import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DetailsContent from './DetailsContent';


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
    font-size: 1.4em;
    display: none;
    color: #000;
    position: absolute;
    opacity: 0;
    transition: all 0.3s ease;
    top: 15px;
    right: 20px;
    background-color: #fff;
    border-radius: 100px;
    width: 40px;
    height: 40px;
    padding: 5px;
`


function ListCategory(props) {
    const [ list, setList ] = useState(props.list);
    const [ show, setShow ] = useState('none');

    useEffect(() => {
        console.log(props);
        setList(props.list);
    }, [])

    const wrapperSetShow = useCallback(val => {
        setShow(val);
    }, [setShow]);

    return (
        <ListContainer>
            <CategoryContainer onClick={() => setShow('flex')} background={list.img}>
                <Background src={list.img} alt={list.title} />
                <IconsContainer className='icons-container'>
                    <i class="fa fa-solid fa-trash"></i>
                </IconsContainer>
                <CategoryTitle>{list.title}</CategoryTitle>
            </CategoryContainer>
            <CategoryDetails style={{display: show}}>
                <DetailsContent list={list} parentStateSetter={wrapperSetShow} />
            </CategoryDetails>
        </ListContainer>
    );
}

export default ListCategory;
