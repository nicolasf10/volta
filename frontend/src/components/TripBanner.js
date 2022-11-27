import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import TripShareContainer from './Trip/TripShareContainer';
import { Link } from 'react-router-dom'


const Banner = styled.div`
    display: table-cell;
    width: 100vw;
    height: 300px;
    position: relative;

    background-color: lightblue;
    background-image: url(${props => props.background ? props.background : "none"};);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const BannerTitle = styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 5rem;
    text-align: center;
    font-family: 'Lora', serif;
    /* text-transform: uppercase; */
`

const BannerText = styled.div`
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
`

const BackDiv = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
    color: #fff;
    font-size: 1.5rem;
    background: none;
    border: none;
    font-family: "Sen", "sans-serif";
`

const BackText = styled.span`
    -webkit-text-stroke: 0.2px #000;
`

const BackIcon = styled.i`
    -webkit-text-stroke: 0.2px #000;
`

const BannerDate = styled.h3`
    font-family : "Sen", "sans-serif";
    font-weight: 400;
    font-size: 1.4rem;
    color: #fff;
    -webkit-text-stroke: 0.3px #000;
    text-align: center;
`

function TripBanner(props) {
    const [trip, setTrip] = useState(props.trip);
    console.log("********")
    console.log(trip)
    console.log("********")

    return (
        <Banner background={trip.image}>
            <BackDiv>
                <Link style={{color: "#fff", textDecoration: "none"}} to="/">
                    <BackIcon className="fa fa-solid fa-arrow-left"></BackIcon> <BackText>My trips</BackText>
                </Link>
            </BackDiv>
            <BannerText>
                <BannerTitle>{trip.title} {trip.emoji}</BannerTitle>
                <BannerDate>{trip.date}</BannerDate>
            </BannerText>
            <TripShareContainer members={trip.members} />
        </Banner>
    );
}

export default TripBanner;
