import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PlaceContainer = styled.div`
    max-width: 100%;
    background: rgb(255, 255, 255);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.11); 
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.11);
    margin: 20px 10px;
    border-radius: 10px;
    padding: 15px 80px 15px 15px;
    position: relative;
`

const PlaceTitle = styled.h4`
    font-family: "Sen", sans-serif;
    font-weight: 600;
`

const PlaceDescription = styled.p`

`

const PlaceAddress = styled.p`
    font-family: "Sen", sans-serif;
    font-style: italic;
    font-weight: 500;
`

const PlaceIcons = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.25em;

    & * {
        cursor: pointer;
        margin: 4px;
        color: rgb(47, 47, 47) !important;
    }

    & a {
        color: rgb(47, 47, 47) !important;
    }
`


function Place(props) {
    const [ item, setItem ] = useState(props.item);

    useEffect(() => {
        console.log(item)
        setItem(props.item);
    }, [])

    //test
    return (
        <>
            { props.new ?
                <PlaceContainer>
                    <PlaceIcons>
                        <a href={item.link} target="a_blank"><i class="fa fa-solid fa-map"></i></a>
                        <i class="fa fa-solid fa-bookmark"></i>
                    </PlaceIcons>
                    <PlaceTitle>{item.title}</PlaceTitle>
                    <PlaceAddress>{item.address}</PlaceAddress>
                </PlaceContainer>
            :
                <PlaceContainer>
                    <PlaceIcons>
                        <a href={item.link} target="a_blank"><i class="fa fa-solid fa-map"></i></a>
                        <i class="fa fa-solid fa-trash"></i>
                    </PlaceIcons>
                    <PlaceTitle>{item.title}</PlaceTitle>
                    < PlaceAddress>{item.address}</PlaceAddress>
                </PlaceContainer>
            }
        </>
    );
}

export default Place;
