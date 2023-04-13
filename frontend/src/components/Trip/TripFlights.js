import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Accomodations from './Accomodations';
import Flights from './Flights';

const PageContainer = styled.div``

const Title = styled.h2`
    font-family: "Lora", serif;
    text-align: center;
`

function TripFlights(props) {
    const [trip, setTrip] = useState(props.trip)

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        
    }, [props.trip])

    return (
        <PageContainer style={{display: props.display}}>
            <Flights trip={trip}/>
        </PageContainer>
    );
}

export default TripFlights;
