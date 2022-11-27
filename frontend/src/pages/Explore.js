import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ExploreDestinations from '../components/Explore/ExploreDestinations';
import ExploreFilter from '../components/Explore/ExploreFilter';
import ExploreSearch from '../components/Explore/ExploreSearch';
import NavbarComponent from '../components/Navbar';
// import Globe from 'react-globe.gl';


const ExplorePage = styled.div`
  min-height: 100vh;
`

const ExplorePageContainer = styled.div`
  padding: 30px;
  position: relative;
  height: inherit;
  /* background-color: lightblue; */
`

const ExploreHeading = styled.h1`
  font-family: 'Lora', serif;
  font-weight: 700;
  opacity: 1;
  display: inline;
  margin: 0px;
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;

`

const NewTripButton = styled.button`
  font-size: 1.1rem;
  border-radius: 7px;
  padding: 7.5px 15px;
  font-family: "Sen", sans-serif;
  color: #fff;
  border: none;
  background-color: #1746A2;
  transition: all 0.2s ease;
  outline: 1px solid var(--darkBlue);
  height: 40px;
  margin-left: 50px;
  margin-top: auto;
  margin-bottom: auto;

  &:hover {
      background-color: transparent;
      color: var(--darkBlue);
  }

  &:focus {
      background-color: transparent ;
      color: var(--darkBlue);
      border: 1px solid var(--darkBlue);
  }
    `

const destinations = [
    {
      title : "Rio de Janeiro",
      region : "Brazil",
      description : "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain.",
      tags : ["type-beach", "type-city", "society-sightseeing", "society-museums", "society-culinary", "society-sports", "society-night", "location-america"],
      images : [
        "https://images.unsplash.com/photo-1593995863951-57c27e518295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1663467673813-169dcfc7a04e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
        "https://images.unsplash.com/photo-1576547849475-57662ff255ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      ]
    },
    {
      title : "Barcelona",
      region : "Spain",
      description : "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.",
      tags : ["type-beach", "type-city", "society-sightseeing", "society-museums", "society-architecture", "society-sports", "society-night", "location-europe"],
      images : [
        "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1579282240050-352db0a14c21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80"
      ]
    }
]

function Explore() {
  return (
      <ExplorePage>
        <NavbarComponent active='explore' />
        <ExplorePageContainer>
          <HeadingContainer>
            <ExploreHeading>Explore 🧭</ExploreHeading>
            <NewTripButton>New Template</NewTripButton>
          </HeadingContainer>
          <ExploreFilter/>
          <ExploreDestinations destinations={destinations}/>
        </ExplorePageContainer>
        
        {/* <ExploreSearch/> */}
        
        
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-9"></div>
          </div>
        </div> */}
      </ExplorePage>
  );
}

export default Explore;
