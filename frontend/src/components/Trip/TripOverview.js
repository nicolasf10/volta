import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Map from './Map.js';


const PageContainer = styled.div`
    /* background-color: red; */
`


function TripOverview(props) {

    

    return (
        <PageContainer>
            overview
            <Map
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
