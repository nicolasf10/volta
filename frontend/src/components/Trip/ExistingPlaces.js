import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Place from './Place';


const PlacesContainer = styled.div`
    overflow-y: scroll;
    position: relative;
    height: calc(100%);
    box-sizing: border-box;
`

const PlacesHeading = styled.h3`
    margin: 15px;
    font-family: "Lora", sans-serif;
    font-weight: 550;
`


function ExistingPlaces(props) {
    const [ list, setList ] = useState(props.list);

    useEffect(() => {
        console.log(props.list);
        setList(props.list);



    }, [])

    return (
        <PlacesContainer>
            <PlacesHeading>Saved Places</PlacesHeading>
            {list.items.map((item, index) => (
                <Place item={item} new={false} />
            ))}
        </PlacesContainer>
    );
}

export default ExistingPlaces;
