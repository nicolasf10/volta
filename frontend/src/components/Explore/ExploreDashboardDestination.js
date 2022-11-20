import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';


const filterDictionary = {
  "type-beach" : "🏖 Beach vacation",
  "type-city" : "🏙 City trip",
  "type-nature" : "🏔 Nature adventure",
  "type-winter" : "❄️ Winter vacation",
  "society-architecture" : "🏛 Architecture",
  "society-sightseeing" : "🗽 Sightseeing",
  "society-museums" : "🏺 Museums",
  "society-culinary" : "🍔 Culinary",
  "society-sports" : "⚽️ Sports",
  "society-night" : "🍺 Night life",
  "society-kid" : "👶 Kid friendly",
  "location-europe" : "🌍 Europe",
  "location-africa" : "🌍 Africa",
  "location-america" : "🌎 North/South America",
  "location-asiaoceania" : "🌏 Asia/Oceania",
  "location-other" : "🌕 Other"
}

const ExploreDashboardDestinationContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  height: 250px;
  display: flex;
  flex-direction: row;
  -webkit-box-shadow: 0px 8px 15px 0px rgba(0,0,0,0.28); 
  box-shadow: 0px 8px 15px 0px rgba(0,0,0,0.28);
`

const DestinationInfo = styled.div`

`

const InfoTitle = styled.h2`
  font-family: "sen", "sans";
  font-weight: 700;
`

const GraySpan = styled.span`
  color: #B0B0B0;
`

const InfoDescription = styled.p`

`

const InfoTag = styled.p`
  display: inline;
  background: #ECECEC;
  padding: 5px;
  border-radius: 10px;
`

const SliderContainer = styled.div`
  width: 250px;
  height: 250px;
`

function ExploreDashboardDestination(props) {
  return (
      <ExploreDashboardDestinationContainer>
        <SliderContainer>
          <ImageSlider images={props.destination.images}/>
        </SliderContainer>
        <DestinationInfo>
          <InfoTitle>{props.destination.title} <GraySpan>{props.destination.region}</GraySpan></InfoTitle>
          <InfoDescription>{props.destination.description}</InfoDescription>
          {props.destination.tags.map((tag) => (
              <InfoTag>{filterDictionary[tag]}</InfoTag>
          ))}
        </DestinationInfo>
      </ExploreDashboardDestinationContainer>
  );
}

export default ExploreDashboardDestination;