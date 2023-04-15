import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Itinerary from './Itinerary.js';
import Map from './Map.js';
import OverviewContent from './OverviewContent.js';


const PageContainer = styled.div`
    /* display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: end; */
    width: 100vw;
    display: flex;
    flex-direction: row;
    /* justify-content: end; */

    @media screen and (max-width: 1001px) {
        flex-direction: column;
    } 
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

    const saveTrip = useCallback((item) => {
        setTrip(prevTrip => ({
            ...prevTrip,
            blocks: [...prevTrip.blocks, item]
        }));
    }, []);

    return (
        <PageContainer style={{display: props.display}}>
            {/* <Itinerary trip={trip} /> */}
            <OverviewContent saveTrip={saveTrip} id={props.id} trip={trip} />
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
