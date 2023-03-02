import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const AccomodationsContainer = styled.div`

`

function Accomodations(props) {
    const [trip, setTrip] = useState(props.trip)

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        
    }, [props.trip])

    return (
        <AccomodationsContainer>
            
        </AccomodationsContainer>
    );
}

export default Accomodations;
