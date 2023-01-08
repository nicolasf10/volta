import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Map from './Map.js';


const PageContainer = styled.div`

`


function TripOverview(props) {
    const [trip, setTrip] = useState(props.trip)

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        
    }, [props.trip])

    return (
        <PageContainer>
            overview
            <Map
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
