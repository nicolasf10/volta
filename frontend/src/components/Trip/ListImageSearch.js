import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getImages } from '../../services/GetUnsplashImages';


const ImageSearchBox = styled.div`
    margin: 10px 0px;
`

const SearchInput = styled.input`
    margin-right: 20px;
    border: none;
    height: 35px;
    color: #242424;
    font-family: "Sen", sans-serif;
    font-size: 1.3em;
    border-bottom: 2px solid rgb(200, 200, 200, 0.8);
    transition: all ease-in 0.2s;

    &::placeholder {
        color: rgb(200, 200, 200, 0.8);
        font-family: "Sen", sans-serif;
        /* border-bottom: 3px solid red; */
        /* font-size: 2em; */
    }
    
    &:focus {
        outline: none;
        border-bottom: 2px solid #1746A2;
    }
`

const SearchImageButton = styled.button`
    background-color: #1746A2;
    border: none;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    width: 35px;
    height: 35px;
`


var emojis = [
    '🌎', '🛩️', '🗽', '🧳', '🏛️'
];


function ListImageSearch(props) {
    const [ imageQuery, setImageQuery ] = useState('');

    useEffect(() => {

    }, [])

    const onClick = (e) => {
        getImages("qeu").then(response => {
            console.log(response)
        });
    }



    return (
        <ImageSearchBox>
            <SearchInput onChange={(e) => (setImageQuery(e.value))} placeholder='Choose banner image' type="text" />
            <SearchImageButton onClick={onClick}>
                <FontAwesomeIcon icon={faSearch} />
            </SearchImageButton>
        </ImageSearchBox>

    );
}

export default ListImageSearch;
