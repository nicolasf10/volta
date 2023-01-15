import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import TripShareContainer from './TripShareContainer';
import { Link } from 'react-router-dom'
import { emojiCountryCode } from 'country-code-emoji';


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
    font-family : "Sen", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    color: #fff;
    -webkit-text-stroke: 0.3px #000;
    text-align: center;
`

const TripEmojiImg = styled.img`
    height: 100%;
    margin-left: 15px;
`

function TripBanner(props) {
    const [trip, setTrip] = useState(props.trip);
    const [ emojiImg, setEmojiImg ] = useState(["Windows", "Win16", "Win32", "WinCE"].includes(window.navigator.userAgentData.platform));

    return (
        <Banner background={trip.image}>
            <BackDiv>
                <Link style={{color: "#fff", textDecoration: "none"}} to="/">
                    <BackIcon className="fa fa-solid fa-arrow-left"></BackIcon> <BackText>My trips</BackText>
                </Link>
            </BackDiv>
            <BannerText>
                <BannerTitle>{trip.title} {emojiImg ? <TripEmojiImg src={"https://flagcdn.com/96x72/" + emojiCountryCode(trip.emoji).toLowerCase() + ".png"}/> : trip.emoji}</BannerTitle>
                <BannerDate>{trip.date}</BannerDate>
            </BannerText>
            <TripShareContainer members={trip.members} />
        </Banner>
    );
}

export default TripBanner;
