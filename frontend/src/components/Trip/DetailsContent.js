import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ExistingPlaces from './ExistingPlaces';
import ListBanner from './ListBanner';
import NewPlaces from './NewPlaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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

const PlacesCategories = styled.div`
    height: calc(100% - 150px);
    box-sizing: border-box;

    @media (max-width: 991px) {
        display: none;
    }
`

const Row = styled.div`
    height: 100%;
`

const Column = styled.div`
    height: 100%;
`

// Mobile Version
const MobileVersion = styled.div`
    display: none;
    height: calc(100% - 150px);

    @media (max-width: 991px) {
        display: block;
    }
`

const ToggleButton = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    background-color: #1746A2;
    padding: 15px;
    color: #fff;
    border-radius: 100px;
    font-family: "Sen", sans-serif;

    & i {
        margin-right: 7.5px;
    }
`


function DetailsContent(props) {
    const [ list, setList ] = useState(props.list);
    const [ recommendations, setRecommendations] = useState([]);
    const [ toggle, setToggle ] = useState("existing");

    useEffect(() => {
        console.log(props.list);
        setList(props.list);
    }, [])

    const handleToggle = (event) => {
        if (toggle === "existing") {
            setToggle("new")
        } else {
            setToggle("existing")
        }
    }

    // const newPlaces = <NewPlaces list={list}/>;

    return (
        <ContentContainer>
            <BackContainer onClick={() => props.parentStateSetter('none')}>
                <BackIcon className="fa fa-solid fa-arrow-left"></BackIcon> Back
            </BackContainer>
            <ListBanner list={list}/>
            <PlacesCategories className="container">
                <Row className="row">
                    <Column className="col-lg-6 col-md-12 col-sm-12">
                        <ExistingPlaces list={list}/>
                    </Column>
                    <Column className="col-lg-6 col-md-12 col-sm-12">
                        <NewPlaces id='desktop' list={list}/>
                    </Column>
                </Row>
            </PlacesCategories>
            <MobileVersion>
                {
                    toggle === "existing"
                    ?
                    <ExistingPlaces list={list}/>
                    :
                    <NewPlaces id='mobile' list={list}/>
                }
                <ToggleButton onClick={handleToggle}>
                    {toggle === "existing" ? <><FontAwesomeIcon icon={faMagnifyingGlass}/> Explore</> : <><i class="fa fa-solid fa-bookmark"></i> View saved</>}
                </ToggleButton>
            </MobileVersion>
        </ContentContainer>
    );
}

export default DetailsContent;
