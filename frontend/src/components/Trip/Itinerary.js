import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import EmojiImg from '../EmojiImg';


const ItineraryContainer = styled.div`

`


function Itinerary(props) {
    const [ list, setList ] = useState(props.list);

    useEffect(() => {
        console.log(props.list);
        setList(props.list);
    }, [props.list])

    
    return (
        <ItineraryContainer>
            iti
        </ItineraryContainer>
    );
}

export default Itinerary;
