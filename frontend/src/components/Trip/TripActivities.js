import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Accomodations from './Accomodations';
import Flights from './Flights';

const PageContainer = styled.div``

function TripActivities(props) {
    const [trip, setTrip] = useState(props.trip)

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        
    }, [props.trip])

    return (
        <PageContainer>
            ac
        </PageContainer>
    );
}

export default TripActivities;
