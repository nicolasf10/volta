import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GoogleMap, LoadScript, useJsApiLoader, MarkerF, BicyclingLayer, HeatmapLayer, TrafficLayer } from '@react-google-maps/api';
import LocationPin from './LocationPin';


const containerStyle = {
    width: '800px',
    height: '800px'
};

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
    const [map, setMap] = useState(null)

    const onLoadMarker = marker => {
        console.log("marker: ", marker)
    }

    useEffect(() => {
        setTrip(props.trip);
        let convert = convertMarkers(trip);
        setMarkers(convert.markers);
        setCenter(convert.center);
        onLoad();

    }, [props.trip])

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
    }, [])
    

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCGPs81uXNmtO-twbZR9oIKqzG8JzEjtzs"
        >
            <GoogleMap
                id="map"
                mapContainerStyle={containerStyle} 
                // onLoad={onLoad}
                center={center}
                zoom={2}

            >
            { /* Child components, such as markers, info windows, etc. */ }
            { markers.map((item, index) => (
                <MarkerF
                    key={index}
                    position={item.position}
                    label={item.label}
                    // onLoad={onLoadMarker}
                />
            )) }
            </GoogleMap>
      </LoadScript>
    )
}

export default React.memo(Map);