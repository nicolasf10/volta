import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getImages } from '../../services/GetUnsplashImages';
import WorldLoader from '../WorldLoader';


const ImageSearchBox = styled.div`
    margin: 10px 0px;
`

const SearchInput = styled.input`
    margin-right: 20px;
    border: none;
    margin-left: 10px;
    height: 35px;
    width: 300px;
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

    @media (max-width: 450px) {
        width: 190px;
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

const ImagesResults = styled.div`
    width: 100%;
    height: 260px;
    margin-top: 10px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
`

const ImagesBox = styled.div`
`

const ImagesFlex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: space-between;
    justify-content: space-evenly;
`

const ImageContainer = styled.div`
    width: 33.3%;
    padding: 10px;

    .active-img {
        border: 5px solid #081736;
        border-radius: 5px;
    }

    @media (max-width: 650px) {
        width: 50%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`

const Image = styled.img`
    width: 100%;
    height: 140px;
    border-radius: 5px;
    object-fit: cover;
    /* margin: 10px; */
    cursor: pointer;


`

const NoResults = styled.p`
    font-family: "Sen";

`

const SearchBox = styled.div`
    display: flex;
    align-items: center;
`

const LoaderBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


var emojis = [
    '🌎', '🛩️', '🗽', '🧳', '🏛️'
];


function ListImageSearch(props) {
    const [ imageQuery, setImageQuery ] = useState('');
    const [ hasClicked, setHasClicked ] = useState(false);
    const  [ isLoading, setIsLoading ] = useState(false);
    const [ results, setResults ] = useState([]); 
    const [ activeImg, setActiveImg ] = useState({item: null, index: -1});

    useEffect(() => {

    }, [])

    const onClick = (e) => {
        e.preventDefault();
        setIsLoading(true);
        getImages(imageQuery).then(response => {
            console.log(response)
            
            setIsLoading(false);
            setHasClicked(true);
            
            setResults(response.results);
            console.log(results)
        });
    }

    const handleChange = e => {
        setImageQuery(e.target.value)
    }

    const handleSelect = (item, index) => {
        console.log(item)
        setActiveImg({item: item, index: index})
        if (props.parentCallback) {
            props.parentCallback(item.urls.regular)
        }
    }


    return (
        <ImageSearchBox>
            <SearchBox>
                <SearchInput onChange={handleChange} name='image-query' value={imageQuery} placeholder='Choose banner image' type="text" />
                <SearchImageButton onClick={onClick}>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchImageButton>
            </SearchBox>
            <ImagesResults>
                {
                    isLoading ? <LoaderBox><WorldLoader /></LoaderBox> : <></>
                }
                {
                    hasClicked ? 
                        <ImagesBox>
                            { (!results || results.length === 0) ? <NoResults>No results found</NoResults>
                                :
                                <ImagesFlex>
                                        {results.slice(0, 10).map((item, index) => {
                                        return (
                                            <ImageContainer key={index} onClick={() => handleSelect(item, index)}>
                                                <Image className={index === activeImg.index ? "active-img" : ""} key={index} src={item.urls.small} alt={item.alt_description} />
                                            </ImageContainer>
                                        )
                                    })}
                                </ImagesFlex>
                            }
                        </ImagesBox>
                    : <></>
                }
            </ImagesResults>
        </ImageSearchBox>

    );
}

export default ListImageSearch;
