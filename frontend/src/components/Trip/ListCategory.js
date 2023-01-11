import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const CategoryContainer = styled.div`
    background-color: #fff;
    -webkit-box-shadow: 5px 5px 15px -6px rgba(0,0,0,0.75); 
    box-shadow: 5px 5px 15px -6px rgba(0,0,0,0.75);
    position: relative;
    margin: 15px 15px;
    padding: 0;
    border-radius: 10px;
    width: 300px;
    height: 400px;

    transition: transform 0.2s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
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
    /* -webkit-text-stroke: 0.3px #fff; */
    font-size: 1.3em;
    font-family: "Sen", sans-serif;
    font-weight: 600;
    /* margin: 10px 0px 0px 10px; */
`


function ListCategory(props) {
    const [ list, setList ] = useState(props.list);

    useEffect(() => {
        console.log(props);
        setList(props.list);
    }, [])

    return (
        <CategoryContainer background={list.img}>
            <Background src={list.img} alt={list.title} />
            <CategoryTitle>{list.title}</CategoryTitle>
        </CategoryContainer>
    );
}

export default ListCategory;
