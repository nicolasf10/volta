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

const MyTripsHeading = styled.h1`
  font-family: 'Sen', sans-serif;
  font-weight: 700;
  opacity: 1;
  margin-bottom: 30px;
  display: inline;
`

const destinations = [
    {
      title : "Rio de Janeiro",
      region : "Brazil",
      description : "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit.",
      tags : ["society-sightseeing", "society-museums", "society-culinary", "society-sports", "society-night", "location-america"],
      images : [
        "https://images.unsplash.com/photo-1593995863951-57c27e518295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1663467673813-169dcfc7a04e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
        "https://images.unsplash.com/photo-1576547849475-57662ff255ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      ]
    }
]

function Explore() {
  return (
      <ExplorePage>
        <NavbarComponent active='explore' />
        <ExplorePageContainer>
          <MyTripsHeading>Explore 🧭</MyTripsHeading>
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
