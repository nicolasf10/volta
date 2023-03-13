import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faCalendar, faHeart, faDollarSign, faEarthAmericas, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

const HeroContainer = styled.div`
    /* min-height: 50vh; */
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #F1F1F1;
`

const Box = styled.div`
    .icon {
        color: #081736;
        font-size: 2em;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 15px;
    /* margin: 20px; */
    /* margin: 30px 0px; */
    /* border: 1px solid #fff; */
`

const BoxTitle = styled.h5`
    font-family: "Sen", sans-serif;
    color: #081736;
    margin-top: 15px;
`

function SecondHero() {
  return (
    <HeroContainer>
        <div className="container">
            <div className="row">
                <Box className="col-lg-4 col-md-6 col-sm-6">
                    <FontAwesomeIcon className='icon' icon={faShare}/>
                    <BoxTitle>Share trips</BoxTitle>
                </Box>
                <Box className="col-lg-4 col-md-6 col-sm-6">
                    <FontAwesomeIcon className='icon' icon={faCalendar}/>
                    <BoxTitle>Plan itinerary</BoxTitle>
                </Box>
                <Box className="col-lg-4 col-md-6 col-sm-6">
                    <FontAwesomeIcon className='icon' icon={faPlaneDeparture}/>
                    <BoxTitle>Book flights</BoxTitle>
                </Box>
                <Box className="col-lg-4 col-md-6 col-sm-6">
                    <FontAwesomeIcon className='icon' icon={faHeart}/>
                    <BoxTitle>Save places of interest</BoxTitle>
                </Box>
                <Box className="col-lg-4 col-md-6 col-sm-6">
                    <FontAwesomeIcon className='icon' icon={faDollarSign}/>
                    <BoxTitle>Create budget</BoxTitle>
                </Box>
                <Box className="col-lg-4 col-md-6 col-sm-6">
                    <FontAwesomeIcon className='icon' icon={faEarthAmericas}/>
                    <BoxTitle>Explore new destinations</BoxTitle>
                </Box>
            </div>
        </div>
    </HeroContainer>
  );
}

export default SecondHero;
