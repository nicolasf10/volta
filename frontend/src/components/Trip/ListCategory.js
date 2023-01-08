import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const CategoryContainer = styled.div`
    background-color: #fff;
    -webkit-box-shadow: 5px 5px 15px -6px rgba(0,0,0,0.75); 
    box-shadow: 5px 5px 15px -6px rgba(0,0,0,0.75);

    margin: 15px 10px;
    padding: 0;
    border-radius: 10px;
    grid-row-end: span 26;

    transition: transform 0.2s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }
`

const Background = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
    scale: 1.01;
`

const CategoryTitle = styled.h1`
    font-size: 1.3em;
    font-family: "Sen", sans-serif;
    font-weight: 600;
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
