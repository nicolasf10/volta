import React, { useState, useEffect, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Place from './Place';
import WorldLoader from '../WorldLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const PlacesContainer = styled.div`
    /* padding: 10px; */
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

    &:focus {
        border-color: #1746A2;
    }
`

const SubmitButton = styled.button`
    height: 40px;
    background-color: #1746A2;
    border: none;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    width: calc(40% - 40px);
`

const NoLocations = styled.div`
    padding: 30px 15px;
    /* text-align: center; */
`

const  NoLocationsText = styled.h4`
    font-family: "Sen", sans-serif;
    font-size: 1.2em;
`


function NewPlacesMobile(props) {
    const [ searched, setSearched ] = useState(false);
    const [ list, setList ] = useState({
        ...props.list,
    });
    const [ searchList, setSearchList ] = useState([]);
    const [ mapList, setMapList ] = useState([])
    const [ loaded, setLoaded ] = useState(true);
    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        setList({
            ...props.list,
        })

        const input = document.getElementById(`pac-input-${list.title}-${props.id}-2`);
        const searchBox = new window.google.maps.places.SearchBox(input);

        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces()

            if (places.length == 0) {
                return;
            }

            var newItemsPrev = [];
            setSearchList([]);

            places.forEach((place) => {
                if (!place.geometry || !place.geometry.location) {
                    console.log("Returned place contains no geometry");
                    return;
                } else {
                    let imgUrl = null;
                    if (place.photos && place.photos.length > 0) {
                        imgUrl = place.photos[0].getUrl({ 'maxWidth': 550, 'maxHeight': 550 })
                    } else {
                        imgUrl = '';
                    }
                    setSearchList([...newItemsPrev,
                        {
                            title: place.name,
                            address: place.formatted_address,
                            position: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
                            link: `https://www.google.com/maps/place/?q=place_id:${place.place_id}`,
                            img: imgUrl
                        }
                    ])
                    newItemsPrev.push({
                        title: place.name,
                        address: place.formatted_address,
                        position: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
                        link: `https://www.google.com/maps/place/?q=place_id:${place.place_id}`,
                        img: imgUrl
                    })
            }
            });
            console.log(searchList)
        });
        

    }, [searchList])

    const handleSubmit = (event) => {
        console.log('Submit!!')
        setSearched(true);
        const newPlaces = searchList.map(place => ({...place}));
        setMapList(newPlaces);
        setCounter(counter+1);
        console.log(newPlaces);
    }

    return (
        <PlacesContainer>
            <PlacesHeading>Explore</PlacesHeading>
            <SearchContainer id={`pac-container-${list.id}-${props.id}-2`}>
                <InputField onChange={() => setSearched(false)} id={`pac-input-${list.title}-${props.id}-2`} type="text"
                    placeholder="Search for location" />
                { loaded ?  
                <SubmitButton onClick={handleSubmit}><FontAwesomeIcon icon={faMagnifyingGlass}/></SubmitButton>
                :
                <SubmitButton style={{background: "#a8a8a8"}} disabled onClick={handleSubmit}><i class="fa fa-solid fa-binoculars"></i></SubmitButton>
                }
            </SearchContainer>
            {   mapList.length > 0 ?
                    <>
                        {mapList.map((item, index) => (
                            <Place refreshTrip={props.refreshTrip} updateList={props.updateList} id={props.id} list={list} key={`${item.title}-${Math.random()}`} item={{...item}} new={true} />
                        ))}
                    </>
                :
                (
                    searched ?
                    <NoLocations>
                        <NoLocationsText>No results</NoLocationsText>
                    </NoLocations>
                    :
                    <></>
                )
            }
        </PlacesContainer>
    );
}

export default NewPlacesMobile;
