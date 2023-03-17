import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PlaceNotes from './PlaceNotes';

const PlaceContainer = styled.div`
    max-width: 100%;
    min-height: 130px;
    background: rgb(255, 255, 255);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.11); 
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.11);
    margin: 20px 10px;
    border-radius: 10px;
    padding: 15px 10px 15px 15px;
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
    background-color: #fff;
    border-radius: 10px;
    padding: 6.5px;
    z-index: 101;

    & * {
        cursor: pointer;
        margin: 4px;
        color: rgb(47, 47, 47) !important;
    }

    & a {
        color: rgb(47, 47, 47) !important;
    }
`

const PlaceContent = styled.div`
    margin-left: 160px;

    @media screen and (max-width: 600px) {
        margin-left: 0px;
        margin-top: 130px;
    }
`

const PlaceImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 160px;
    border-radius: 10px 0px 0px 10px;
    object-fit: cover;

    @media screen and (max-width: 600px) {
        width: 100%;
        height: 130px;
        border-radius: 10px 10px 0px 0px;
    }
`

const PaddingRight = styled.div`
    padding-right: 75px;
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
                <>
                    {item.img ?
                        <PlaceContainer>
                            <PlaceIcons>
                                <a href={item.link} target="a_blank"><i class="fa fa-solid fa-map"></i></a>
                                <i class="fa fa-solid fa-bookmark"></i>
                            </PlaceIcons>
                            <PlaceContent>
                                <PaddingRight>
                                    <PlaceTitle>{item.title}</PlaceTitle>
                                    <PlaceAddress>{item.address}</PlaceAddress>
                                </PaddingRight>
                            </PlaceContent>
                            <PlaceImg src={item.img} />
                        </PlaceContainer>
                    :
                        <PlaceContainer>
                            <PlaceIcons>
                                <a href={item.link} target="a_blank"><i class="fa fa-solid fa-map"></i></a>
                                <i class="fa fa-solid fa-bookmark"></i>
                            </PlaceIcons>
                            <PaddingRight>
                                <PlaceTitle>{item.title}</PlaceTitle>
                                <PlaceAddress>{item.address}</PlaceAddress>
                            </PaddingRight>
                        </PlaceContainer>
                    }
                </>
            :
                <>
                    {item.img ?
                        <PlaceContainer>
                            <PlaceIcons>
                                <a href={item.link} target="a_blank"><i class="fa fa-solid fa-map"></i></a>
                                <i class="fa fa-solid fa-trash"></i>
                            </PlaceIcons>
                            <PlaceContent>
                                <PaddingRight>
                                    <PlaceTitle>{item.title}</PlaceTitle>
                                    <PlaceAddress>{item.address}</PlaceAddress>
                                </PaddingRight>
                                <PlaceNotes item={item}/>
                            </PlaceContent>
                            <PlaceImg src={item.img} />
                        </PlaceContainer>  
                    :
                        <PlaceContainer>
                            <PlaceIcons>
                                <a href={item.link} target="a_blank"><i class="fa fa-solid fa-map"></i></a>
                                <i class="fa fa-solid fa-trash"></i>
                            </PlaceIcons>
                            <PaddingRight>
                                <PlaceTitle>{item.title}</PlaceTitle>
                                <PlaceAddress>{item.address}</PlaceAddress>
                            </PaddingRight>
                            <PlaceNotes item={item}/>
                        </PlaceContainer> 
                    }
                </>
            }
        </>
    );
}

export default Place;
