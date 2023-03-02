import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const FlightsContainer = styled.div`
    width: 300px;
    height: 500px;
    background-color: gainsboro;
`

function Flights(props) {
    const [trip, setTrip] = useState(props.trip)

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        console.log(window)
        new window.skyscanner.widgets.load();
    }, [props.trip])

    return (
        <FlightsContainer>
            <div
                data-skyscanner-widget="FlightSearchWidget"
                data-locale="en-GB"
            />
        </FlightsContainer>
    );
}

export default Flights;
