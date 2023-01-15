import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GoogleMap, LoadScript, useJsApiLoader, MarkerF, BicyclingLayer, TransitLayer, TrafficLayer } from '@react-google-maps/api';
import LocationPin from './LocationPin';


const containerStyle = {
    width: '50vw',
    height: '50vh',
};

const MapContainer = styled.div`

`

const ToggleOption = styled.button`
    font-size: 20px;
    border: none;
    background: none;
`

const Toggles = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    background-color: #fff;
    border-radius: 0px 10px 10px 0px;
`

const convertMarkers = (trip) => {
    var markersList = [];
    
    var lat = 0;
    var lng = 0;

    if (trip != null) {
        trip.lists.forEach(function(item) {
            console.log(item)
            item.items.forEach(function(marker) {
                markersList.push(
                    {
                        label: marker.title,
                        icon: item.icon,
                        position: marker.position
                    }
                )
                lat += marker.position.lat;
                lng += marker.position.lng;
            })
        })
    } else {
        console.log("Trip not found.");
    }

    console.log(markersList);

    console.log(lat);

    var convert = {
        markers: markersList,
        center: {lat: lat/markersList.length, lng: lng/markersList.length}
    }

    return convert;
}

function Map(props) {
    const [ trip, setTrip ] = useState(props.trip);
    const [ markers, setMarkers ] = useState([]);
    const [ center, setCenter ] = useState({lat: 0, lng: 0});
    const [ key, setKey] = useState(process.env.GOOGLEKEY);
    const [ layers, setLayers ] = useState({
        bicycling: false,
        transit: false
    });

    useEffect(() => {
        setTrip(props.trip);
        let convert = convertMarkers(trip);
        setMarkers(convert.markers);
        setCenter(convert.center);
        console.log(process.env.GOOGLEKEY)

    }, [props.trip])

    return (
        <MapContainer>
            <LoadScript
                googleMapsApiKey="AIzaSyCGPs81uXNmtO-twbZR9oIKqzG8JzEjtzs"
            >
                <GoogleMap
                    id="map"
                    mapContainerStyle={containerStyle} 
                    center={center}
                    zoom={13}

                >
                    <Toggles>
                        <ToggleOption style={{color: layers.bicycling ? "#000" : "#7d7d7d"}} onClick={() => (setLayers({...layers, bicycling: !(layers.bicycling)}))}><i className="fa fa-solid fa-bicycle"></i></ToggleOption>
                        <ToggleOption style={{color: layers.transit ? "#000" : "#7d7d7d"}} onClick={() => (setLayers({...layers, transit: !(layers.transit)}))}><i className="fa fa-solid fa-train"></i></ToggleOption>
                    </Toggles>
                    { layers.bicycling ? <BicyclingLayer/> : <></> }
                    { layers.transit ? <TransitLayer/> : <></> }

                    { /* Child components, such as markers, info windows, etc. */ }
                    { markers.map((item, index) => (
                        <MarkerF
                            key={index}
                            position={item.position}
                            label={item.label}
                            icon={{
                                // path: google.maps.SymbolPath.CIRCLE,
                                url: (require(`./MarkerIcons/${item.icon}.png`)),
                                fillColor: '#EB00FF',
                                scale: 0.1,
                            }}
                        />
                    )) }
                </GoogleMap>
            </LoadScript>
        </MapContainer>
    )
}

export default React.memo(Map);