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

const ImagesResults = styled.div``

const ImagesBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Image = styled.img`
    width: 200px;
    height: 140px;
    border-radius: 5px;
    object-fit: cover;
    margin: 10px;
`

const NoResults = styled.p``


var emojis = [
    '🌎', '🛩️', '🗽', '🧳', '🏛️'
];


function ListImageSearch(props) {
    const [ imageQuery, setImageQuery ] = useState('');
    const [ hasClicked, setHasClicked ] = useState(false);
    const  [ isLoading, setIsLoading ] = useState(false);
    const [ results, setResults ] = useState([]); 

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


    return (
        <ImageSearchBox>
            <SearchInput onChange={handleChange} name='image-query' value={imageQuery} placeholder='Choose banner image' type="text" />
            <SearchImageButton onClick={onClick}>
                <FontAwesomeIcon icon={faSearch} />
            </SearchImageButton>
            <ImagesResults>
                {
                    isLoading ? <WorldLoader /> : <></>
                }
                {
                    hasClicked ? 
                        <ImagesBox>
                            { results.length == 0 ? <NoResults>No results found</NoResults>
                                : 
                                <div>
                                    {results.slice(0, 10).map((item, index) => {
                                        return (
                                            <Image key={index} src={item.links.download} alt={item.alt_description} />
                                        )
                                    })}
                                </div>
                            }
                        </ImagesBox>
                    : <></>
                }
            </ImagesResults>
        </ImageSearchBox>

    );
}

export default ListImageSearch;
