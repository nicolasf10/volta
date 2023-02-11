import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ExistingPlaces from './ExistingPlaces';
import ListBanner from './ListBanner';
import NewPlaces from './NewPlaces';

const google = window.google;

const ContentContainer = styled.div`
    position: relative;
    border-radius: 10px;
    background-color: #fff;
    width: 80vw;
    height: 80vh;

    @media(max-width: 991px) {
        width: 90vw;
        height: 90vh;
    }
`

const BackContainer = styled.div`
    margin: 10px;
    position: absolute;
    top: 0px;
    left: 0px;
    cursor: pointer;
    font-family : "Sen", "sans-serif";
    z-index: 4;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 100px;
    padding: 5px 10px;
    transition: 0.15s ease;

    &:hover {
        background-color: #fff;
    }
`

const BackIcon = styled.i`

`

const PlacesCategories = styled.div``


function DetailsContent(props) {
    const [ list, setList ] = useState(props.list);
    const [ recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        console.log(props.list);
        setList(props.list);

        let input = "restuarants"
        const searchBox = new google.maps.places.SearchBox(input).getPlaces("restaurant");
        console.log(searchBox)

    }, [])

    return (
        <ContentContainer>
            <BackContainer onClick={() => props.parentStateSetter('none')}>
                <BackIcon className="fa fa-solid fa-arrow-left"></BackIcon> Back
            </BackContainer>
            <ListBanner list={list}/>
            <PlacesCategories className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <ExistingPlaces list={list}/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <NewPlaces list={list}/>
                    </div>
                </div>
            </PlacesCategories>
        </ContentContainer>
    );
}

export default DetailsContent;
