import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GoogleMap, LoadScript, useJsApiLoader, MarkerF, InfoWindowF, BicyclingLayer, TransitLayer, TrafficLayer } from '@react-google-maps/api';
import LocationPin from './LocationPin';
import WorldLoader from '../WorldLoader';
import EmojiImg from '../EmojiImg';


const containerStyle = {
    width: '50vw',
    height: '100vh',
    borderRadius: '0px'
};

const MapContainer = styled.div`
    background-color: #e6e6e6;
    width: '50vw';
    height: '50vh';
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

const InfoWindowContainer = styled.div`
    background: white;
    /* border: 1px solid #ccc; */
    padding: 15px;
`

const InfoWindowCategory = styled.h6`
    font-family: "Sen", sans-serif;
    font-size: 0.73rem;
    font-weight: 600;
    color: #6A6A6A;
    text-transform: uppercase;
`

const InfoWindowLabel = styled.h6`
    font-family: "Sen", sans-serif;
`

const InfoWindowAddress = styled.p`
    font-family: "Sen", sans-serif;
    font-style: italic;
    font-weight: 500;
`

const InfoWindowDescription = styled.p`

`

const InfoWindowLink = styled.a`
    font-family: "Sen", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
`

const convertMarkers = (trip) => {
    var markersList = [];
    
    var lat = 0;
    var lng = 0;

    if (trip != null) {
        trip.lists.forEach(function(item) {
            console.log(item)
            item.items.forEach(function(marker) {
                console.log(marker)
                markersList.push(
                    {
                        list: item.title,
                        label: marker.title,
                        emoji: item.emoji,
                        address: item.address,
                        link: marker.link,
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

    const [ infoWindow, setInfoWindow ] = useState({
        showInfoWindow: true,
        selectedMarker: null,
    })

    useEffect(() => {
        setTrip(props.trip);
        let convert = convertMarkers(trip);
        setMarkers(convert.markers);
        setCenter(convert.center);
        console.log("MAP LOADED")

    }, [props.trip])

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAAqWy0DmJhNoklNmZgyVRiZY9daxfswrY"
      })

    return ( isLoaded ? (
        <MapContainer>
                <GoogleMap
                    id="map"
                    mapContainerStyle={containerStyle} 
                    center={center}
                    zoom={13}
                    language="ko-KR"
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
                            onClick={() => {
                                setInfoWindow({...infoWindow, selectedMarker: item})
                            }}
                            icon={
                                new window.google.maps.MarkerImage(
                                    `https://emojicdn.elk.sh/${item.emoji}`,
                                    null, /* size is determined at runtime */
                                    null, /* origin is 0,0 */
                                    null, /* anchor is bottom center of the scaled image */
                                    new window.google.maps.Size(35, 35)
                                )
                            }
                        />
                    )) }
                    { infoWindow.selectedMarker ? 
                        <InfoWindowF
                            // onLoad={onLoad}
                            position={infoWindow.selectedMarker.position}
                            onCloseClick={
                                () => {
                                    setInfoWindow({...infoWindow, selectedMarker: null})
                                }
                            }
                            marker={infoWindow.selectedMarker}
                        >
                            <InfoWindowContainer>
                                <InfoWindowCategory>{infoWindow.selectedMarker.list}</InfoWindowCategory>
                                <InfoWindowLabel>{infoWindow.selectedMarker.label}</InfoWindowLabel>
                                <InfoWindowAddress>{infoWindow.selectedMarker.address}</InfoWindowAddress>
                                <InfoWindowLink onClick={() => (window.open(infoWindow.selectedMarker.link))}>Open in Google Maps</InfoWindowLink>
                            </InfoWindowContainer>
                        </InfoWindowF>
                        : null
                    }
                </GoogleMap>
        </MapContainer>
    ) : <></>
    )
}

export default React.memo(Map);