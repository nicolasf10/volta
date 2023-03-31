import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GoogleMap, useGoogleMap , LoadScript, useJsApiLoader, MarkerF, InfoWindowF, BicyclingLayer, TransitLayer, TrafficLayer } from '@react-google-maps/api';
import mapIcon from './../../images/google-map-icon.png';
import LocationPin from './LocationPin';
import WorldLoader from '../WorldLoader';
import EmojiImg from '../EmojiImg';
import CodesCoordinate from './CodesCoordinate';


const containerStyle = {
    width: '35vw',
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

const SaveMapBox = styled.div`
    border-radius: 100px;
    background: #fff;
    position: absolute;
    top: 60px;
    left: 10px;
    height: 50px;
    cursor: pointer;
`

const SaveMapText = styled.p`
    color: #081736;
    padding: 10px;
    font-family: "Sen", sans-serif;
    font-weight: 600;
`

const MapIcon = styled.img`
    width: 30px;
    height: 30px;
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
                        position: {
                            lat: parseFloat(marker.position.lat),
                            lng: parseFloat(marker.position.lng)
                        }
                    }
                )
                lat += parseFloat(marker.position.lat);
                lng += parseFloat(marker.position.lng);
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

function SaveToGoogleMapsButton(props) {
    // Get the Google Maps object using the useGoogleMap hook
    const map = useGoogleMap();
    let markersProps = props.markers;
    console.log(markersProps)
  
    function saveToGoogleMaps() {
      // Get the current map center and zoom level
      const center = map.getCenter();
      const zoom = map.getZoom();
  
      // Create an array to hold the marker data
      const markers = [];
  
      // Loop through each marker on the map and add its data to the array
      markersProps.forEach(function(marker) {
        markers.push({
          position: marker.position,
          title: marker.label,
          // Add any other marker data you want to include here
        });
      });
  
      let url = "https://www.google.com/maps/place/";
  
        if (markers.length === 0) {
        // If there are no markers, just link to the map center
        url += center.lat() + "," + center.lng();
        } else if (markers.length === 1) {
        // If there is only one marker, link directly to it
        url += markers[0].getPosition() + "," + markers[0].getPosition();
        } else {
        // If there are multiple markers, create a URL-encoded string of their positions
        const markerPositions = markers.map(m => m.position.lat + "," + m.position.lng).join("|");
        url += "@(" + markerPositions + ")";
        }
    
        url += "/@" + center.lat() + "," + center.lng() + "," + zoom + "z";
  
      // Open the Google Maps API in a new window
      window.open(url);
    }
  
    return (
        <SaveMapBox onClick={saveToGoogleMaps}>
            <SaveMapText><MapIcon src={mapIcon} /> Export map</SaveMapText>
        </SaveMapBox>
    );
}


function Map(props) {
    const [ trip, setTrip ] = useState(props.trip);
    const [ markers, setMarkers ] = useState([]);
    const [ center, setCenter ] = useState({lat: 0, lng: 0});
    const [ key, setKey] = useState(process.env.GOOGLEKEY);
    const [ zoom, setZoom] = useState(13);
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
        if (convert.center && convert.center.lat) {
            setCenter(convert.center);
        } else if (trip.place_code != '') {
            setZoom(6);
            let coordinates = CodesCoordinate[trip.place_code]
            if (coordinates) {
                setCenter(coordinates)
            } else {
                setCenter({lat: 32.0853, lng: 34.7818})
            }
        } else {
            setCenter({lat: 32.0853, lng: 34.7818})
        }
        
        console.log("MAP LOADED");

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
                    zoom={zoom}
                    language="ko-KR"
                >
                    {/* <SaveToGoogleMapsButton markers={markers} /> */}
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