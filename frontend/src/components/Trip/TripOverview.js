import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Itinerary from './Itinerary.js';
import Map from './Map.js';


const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: end;
`

const mapStyle = {
    justifySelf: 'start'
}

function TripOverview(props) {
    const [trip, setTrip] = useState(props.trip)

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        
    }, [props.trip])

    return (
        <PageContainer>
            <Itinerary trip={trip} />
            <Map
                style={mapStyle}
                trip={trip}
                onLoad={map => {
                    const bounds = new window.google.maps.LatLngBounds();
                    map.fitBounds(bounds);
                }}
                onUnmount={map => {
                    // do your stuff before map is unmounted
                }}
            />
        </PageContainer>
    );
}

export default TripOverview;
