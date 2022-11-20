import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ExploreDashboardDestination from './ExploreDashboardDestination';


const ExploreDestinationsContainer = styled.div`
    display: block;
    height: calc(100vh - 190px);
    width: calc(100vw - 340px);
    position: fixed;
    margin-top: 10px;
    padding: 5px;
    border-radius: 15px;
    /* -webkit-box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.17); 
    box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.17); */
    background-color: #F8F8F8;
`

const ExploreDestinationsBox = styled.div`
    height: calc(100vh - 200px);
    padding: 10px;
    /* width: calc(100vw - 340px); */
    overflow-y: scroll;
`

const ResultsText = styled.h6`
    margin-left: 10px;
    margin-top: 10px;
`

function ExploreDestinations(props) {
  return (
      <ExploreDestinationsContainer>
        <ExploreDestinationsBox>
          <ResultsText>18 results</ResultsText>
          {props.destinations.map((destination) => (
            <ExploreDashboardDestination destination={destination}/>
          ))}
        </ExploreDestinationsBox>
      </ExploreDestinationsContainer>
  )
}

export default ExploreDestinations;