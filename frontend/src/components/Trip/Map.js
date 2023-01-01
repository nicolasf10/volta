import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GoogleMap, LoadScript, useJsApiLoader, MarkerF, BicyclingLayer, HeatmapLayer, TrafficLayer } from '@react-google-maps/api';
import LocationPin from './LocationPin';


const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const convertMarkers = (trip) => {
    var markersList = [];

    console.log("TRIPPPPPPP")
    console.log(trip)
    console.log("TRIPPPPPPP")

    trip.lists.map((item) => (
        // item.items.map((marker) => (
        console.log("heyeyheyheyhyhhey")
            // markersList.push(
            //     {
            //         label: marker.title,
            //         position: marker.position
            //     }
            // )
        // ))
    ))

    console.log(markersList)

    return markersList;
}
  
function Map(props) {
    const [ trip, setTrip ] = useState();
    const [ markers, setMarkers ] = useState([]);
    const [ key, setKey] = useState(process.env.GOOGLEKEY);

    const onLoadMarker = marker => {
        console.log("marker: ", marker)
    }

    useEffect(() => {
        setTrip(props.trip)
        console.log("*********")
        console.log(props.trip)
        console.log("******")
        setMarkers(convertMarkers(trip))
    })
    

    return (
        <LoadScript
            googleMapsApiKey={key}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={5}
            >
            { /* Child components, such as markers, info windows, etc. */ }
            { markers.map((item) => (
                <MarkerF
                    position={item.position}
                    label={item.label}
                    onLoad={onLoadMarker}
                />
            )) }
            </GoogleMap>
      </LoadScript>
    )
}

export default React.memo(Map);