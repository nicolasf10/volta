import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Place from './Place';
import WorldLoader from '../WorldLoader';


const PlacesContainer = styled.div`
    padding: 10px;
    overflow-y: scroll;
    position: relative;
    height: calc(100%);
    box-sizing: border-box;
`

const PlacesHeading = styled.h3`
    margin: 15px;
    font-family: "Lora", sans-serif;
    font-weight: 550;
`

const SearchContainer = styled.div`

`

const InputField = styled.input`
    margin: 5px 15px;
    font-family: "Sen", sans-serif;
    min-width: 60%;
    border-radius: 5px;
    padding: 5px;
    border: 1.5px solid #8c8c8c;
    height: 40px;
`

const SubmitButton = styled.button`
    height: 40px;
    background-color: #1746A2;
    border: none;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    width: 80px;
`

const NoLocations = styled.div`
    padding: 30px 15px;
    /* text-align: center; */
`

const  NoLocationsText = styled.h4`
    font-family: "Sen", sans-serif;
    font-size: 1.2em;
`


function NewPlacesBackup(props) {
    const [ forceUpdate, setForceUpdate ] = useState(1);
    const [ searched, setSearched ] = useState(false);
    const [ list, setList ] = useState({
        ...props.list,
        items: []
    });
    const [ searchList, setSearchList ] = useState([]);
    const [ inputVal, setInputVal ] = useState("");

    useEffect(() => {
        setList({
            ...props.list,
            items: []
        })

        setInputVal("")

        const input = document.getElementById("pac-input");
        const searchBox = new window.google.maps.places.SearchBox(input);

        let markers = [];

        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();

            if (places.length == 0) {
            return;
            }

            // Clear out the old markers.
            // markers.forEach((marker) => {
            // marker.setMap(null);
            // });
            // markers = [];

            // For each place, get the icon, name and location.
            //const bounds = new window.google.maps.LatLngBounds();

            setList({
                ...props.list,
                items: []
            })

            places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }

                console.log(place)

            // const icon = {
            //     url: place.icon,
            //     size: new google.maps.Size(71, 71),
            //     origin: new google.maps.Point(0, 0),
            //     anchor: new google.maps.Point(17, 34),
            //     scaledSize: new google.maps.Size(25, 25),
            // };

            // // Create a marker for each place.
            // markers.push(
            //     new google.maps.Marker({
            //     map,
            //     icon,
            //     title: place.name,
            //     position: place.geometry.location,
            //     })
            // );
            // if (place.geometry.viewport) {
            //     // Only geocodes have viewport.
            //     bounds.union(place.geometry.viewport);
            // } else {
            //     bounds.extend(place.geometry.location);
            // }
            });
            // map.fitBounds(bounds);
        });
        

    }, [])

    const handleChange = (event) => {
        setInputVal(event.target.value);
        setSearched(false);
    }

    // when place input is changed
    const handleSubmit = (event) => {
        console.log("SUBMIT")
        setSearchList([])
        setList({
            ...props.list,
            items: []
        })
        const service = new window.google.maps.places.AutocompleteService();
        console.log("GOT here 84")
        console.log(inputVal)
        const gettingDetails = (place_id, callback) => {
            const detailsService = new window.google.maps.places.PlacesService(document.createElement('div'));
            const request = {
                placeId: place_id,
                fields: ["name", "formatted_address", "place_id", "geometry", "url"],
            };
        
            detailsService.getDetails(request, (result, status) => {
                callback(result)
                return result;
            })
        }

        const displaySuggestions = function (predictions, status) {
            if (status != window.google.maps.places.PlacesServiceStatus.OK || !predictions) {
              //alert(status);
              return;
            }
            
            var newPlaces = [];
            setList({
                ...props.list,
                items: []
            })
            var newItemsPrev = []
            predictions.forEach((prediction) => {
                // getting place details
                const result = gettingDetails(prediction.place_id, (response) => {
                    setList({
                        ...props.list,
                        items: [...newItemsPrev,
                            {
                                title: response.name,
                                address: response.formatted_address,
                                position: {lat: response.geometry.location.lat, lng: response.geometry.location.lng},
                                link: response.url
                            }
                        ]
                    })
                    newItemsPrev.push({
                        title: response.name,
                        address: response.formatted_address,
                        position: {lat: response.geometry.location.lat, lng: response.geometry.location.lng},
                        link: response.url
                    })
                })   
            });

            console.log(predictions)

            setSearchList(newPlaces);
        };

        const autocomplete = service.getPlacePredictions({ input: inputVal }, displaySuggestions);
        setSearched(true);

        const searchBox = new window.google.maps.places.SearchBox("coffee shops near Munich");
        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();
            console.log(places)
        });
        
    }

    return (
        <PlacesContainer>
            <PlacesHeading>Explore</PlacesHeading>
            <SearchContainer id="pac-container">
                <InputField id="pac-input" value={inputVal} type="text"
                    onChange={handleChange}
                    placeholder="Search for location" />
                <SubmitButton
                // onClick={handleSubmit}
                ><i class="fa fa-solid fa-binoculars"></i></SubmitButton>
            </SearchContainer>
            {   list.items.length > 0 ?
                    <>
                        {list.items.map((item, index) => (
                            <Place item={item} new={true} />
                        ))}
                    </>
                :
                (
                    inputVal === "" ? 
                    <NoLocations>
                        <NoLocationsText>Enter location name. If you need help finding new places, we recommend using Google!</NoLocationsText>
                    </NoLocations>
                    : 
                    (
                        searched ?
                        <NoLocations>
                            <NoLocationsText>No results</NoLocationsText>
                        </NoLocations>
                        :
                        <></>
                    )
                )
            }
        </PlacesContainer>
    );
}

export default NewPlacesBackup;
