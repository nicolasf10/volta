import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import EmojiImg from '../EmojiImg';
import ImageSlider from './ImageSlider';


const filterDictionary = {
  "type-beach" : ["🏖️", "Beach vacation"],
  "type-city" : ["🏙️", "City trip"],
  "type-nature" : ["⛰️", "Nature adventure"],
  "type-winter" : ["❄️", "Winter vacation"],
  "society-architecture" : ["🏛️", "Architecture"],
  "society-sightseeing" : ["🗽", "Sightseeing"],
  "society-museums" : ["🏺", "Museums"],
  "society-culinary" : ["🍔", "Culinary"],
  "society-sports" : ["⚽️", "Sports"],
  "society-night" : ["🍺", "Night life"],
  "society-kid" : ["👶", "Kid friendly"],
  "location-europe" : ["🌍", "Europe"],
  "location-africa" : ["🌍", "Africa"],
  "location-america" : ["🌎", "North/South America"],
  "location-asiaoceania" : ["🌏", "Asia/Oceania"],
  "location-other" : ["🌕", "Other"]
}

const ExploreDashboardDestinationContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  height: 300px;
  display: flex;
  flex-direction: row;
  -webkit-box-shadow: 0px 8px 15px 0px rgba(0,0,0,0.28); 
  box-shadow: 0px 8px 15px 0px rgba(0,0,0,0.28);
  margin-bottom: 35px;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`

const DestinationInfo = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;

  @media screen and (max-width: 1200px) {
    margin-top: 10px;
  }
`

const InfoTitle = styled.h2`
font-family: 'Lora', serif;

  font-weight: 700;
`

const GraySpan = styled.span`
  color: #B0B0B0;
`

const InfoDescription = styled.p`

`

const TagsContainer = styled.div`
  /* display: flex;
  flex-direction: row; */
  border-top: 1px #E5E5E5 solid;
  border-bottom: 1px #E5E5E5 solid;
  padding: 7.5px 0px;
`

const TagsList = styled.div`
  margin-top: 7.5px;
`

const TagsTitle = styled.p`
  margin: 0px;
  font-weight: 600;
`

const InfoTag = styled.p`
  display: inline-block;
  background: #ECECEC;
  padding: 5px 10px;
  border-radius: 100px;
  margin-right: 10px;
  margin: 0px 10px 10px 0px;
`

const SliderContainer = styled.div`
  min-width: 300px;
  /* height: 100%; */
  /* border: 1px solid gold; */
`

const ScrollContainer = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

function ExploreDashboardDestination(props) {
  return (
      <ExploreDashboardDestinationContainer>
        <SliderContainer>
          <ImageSlider destination={props.destination} images={props.destination.images}/>
        </SliderContainer>
        <DestinationInfo>
          <InfoTitle>{props.destination.title} <GraySpan>{props.destination.region}</GraySpan></InfoTitle>
          <ScrollContainer>
            <InfoDescription>{props.destination.description}</InfoDescription>
            
            <TagsContainer>
              <TagsTitle>Perfect if you like...</TagsTitle>
                <TagsList>
                  {props.destination.tags.map((tag) => (
                      <InfoTag><EmojiImg emoji={filterDictionary[tag][0]}/>{filterDictionary[tag][1]}</InfoTag>
                  ))}
                </TagsList>
            </TagsContainer>
          </ScrollContainer>
        </DestinationInfo>
      </ExploreDashboardDestinationContainer>
  );
}

export default ExploreDashboardDestination;