import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import TripShareContainer from './TripShareContainer';
import { Link } from 'react-router-dom'
import EmojiImg from '../EmojiImg';


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
    left: 20px;
    color: #000;
    font-size: 1.1rem;
    background: none;
    border: none;
    font-family: "Sen", "sans-serif";
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 100px;
    padding: 5px 10px;
    transition: 0.15s ease;

    &:hover {
        background-color: #fff;
    }
`

const BackText = styled.span`
`

const BackIcon = styled.i`
`

const BannerDate = styled.h3`
    font-family : "Sen", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    color: #fff;
    -webkit-text-stroke: 0.3px #000;
    text-align: center;
`

const EmojiContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 70px;
    transition: 0.15s ease;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`

const IconsContainer = styled.div`
    position: absolute;
    top: 17.5px;
    right: 90px;

    & * {
        color: #fff;
    }
`

const IconI = styled.i`
    color: #fff;
    cursor: pointer;
    margin-right: 10px;
`


function TripBanner(props) {
    const [trip, setTrip] = useState(props.trip);

    return (
        <Banner background={trip.image}>
            <BackDiv>
                <Link style={{color: "#000", textDecoration: "none"}} to="/">
                    <BackIcon className="fa fa-solid fa-arrow-left"></BackIcon> <BackText>My trips</BackText>
                </Link>
            </BackDiv>
            <BannerText>
                <BannerTitle>{trip.title} <EmojiContainer><EmojiImg size="60px" emoji={trip.emoji} /></EmojiContainer></BannerTitle>
                <BannerDate>{trip.date}</BannerDate>
            </BannerText>
            <IconsContainer>
                <IconI className="fa fa-solid fa-image"></IconI>
                <IconI className="fa fa-solid fa-pencil"></IconI>
            </IconsContainer>
            <TripShareContainer members={trip.members} />
        </Banner>
    );
}

export default TripBanner;
