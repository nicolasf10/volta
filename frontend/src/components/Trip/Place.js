import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const PlaceContainer = styled.div`
    max-width: 100%;
    background: rgb(255, 255, 255);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.11); 
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.11);
    margin: 20px 10px;
    border-radius: 10px;
    padding: 5px;
`

const PlaceTitle = styled.h4`

`



const PlaceDescription = styled.p`

`

const PlaceAddress = styled.p`

`


function Place(props) {
    const [ item, setList ] = useState(props.item);

    useEffect(() => {
        console.log(props.item);
        setList(props.item);
    }, [])

    //test
    return (
        <>
            { props.new ?
                <PlaceContainer>
                    <PlaceTitle>{item.title}</PlaceTitle>
                    <PlaceAddress>{item.address}</PlaceAddress>
                    <PlaceDescription>{item.description}</PlaceDescription>
                </PlaceContainer>
            :
                <PlaceContainer>
                    <PlaceTitle>{item.title}</PlaceTitle>
                    <PlaceAddress>{item.address}</PlaceAddress>
                    <PlaceDescription>{item.description}</PlaceDescription>
                </PlaceContainer>
            }
        </>
    );
}

export default Place;
