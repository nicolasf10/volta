import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import EmojiImg from '../components/EmojiImg';
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
    },
    {
      title: "Toronto",
      region: "Canada",
      description: "Toronto is the capital city of the Canadian province of Ontario. It's a major Canadian city known for its iconic CN Tower, diverse neighborhoods, and cultural attractions.",
      tags: [
        "type-city",
        "society-architecture",
        "society-sightseeing",
        "society-museums",
        "society-culinary",
        "society-sports",
        "society-night",
        "location-america"
      ],
      images: [
        "https://images.unsplash.com/photo-1507992781348-310259076fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1542704792-e30dac463c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      ]
    },
    {
      title: "Tokyo",
      region: "Japan",
      description: "Tokyo is the capital of Japan, and is known for its bright lights, bustling streets, and modern architecture. From the Imperial Palace to the iconic Tokyo Tower, there is plenty to see and do in this vibrant city.",
      tags: ["type-city", "society-sightseeing", "society-museums", "society-culinary", "society-night", "location-asiaoceania"],
      images: [
        "https://images.unsplash.com/photo-1570521462033-3015e76e7432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
        "https://images.unsplash.com/photo-1570543922355-c64a19ab2bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1634110555127-12685786b487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      ]
    },
    {
      title: "Cape Town",
      region: "South Africa",
      description: "Cape Town is a coastal city in South Africa, known for its stunning natural scenery, including Table Mountain and the nearby Cape of Good Hope. Visitors can also enjoy the city's beaches, vineyards, and vibrant cultural scene.",
      tags: ["type-beach", "type-city", "type-nature", "society-sightseeing", "society-museums", "society-culinary", "location-africa"],
      images: [
        "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
        "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1599407384144-77deae48a47a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      ]
    },
    {
      title: "Sydney",
      region: "Australia",
      description: "Sydney is a bustling city on Australia's east coast, known for its iconic landmarks such as the Sydney Opera House and Harbour Bridge. Visitors can also enjoy the city's beaches, parks, and lively arts scene.",
      tags: ["type-beach", "type-city", "society-sightseeing", "society-museums", "society-culinary", "society-night", "location-asiaoceania"],
      images: [
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1530276371031-2511efff9d5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1559651868-066bcc28f358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      ]
    },
    {
      title: "Venice",
      region: "Italy",
      description: "Venice is a picturesque city in northeastern Italy, known for its canals, historic architecture, and artistic heritage. Visitors can take a gondola ride, visit the famous St. Mark's Basilica, and enjoy the city's many museums and galleries.",
      tags: ["type-city", "society-architecture", "society-sightseeing", "society-museums", "society-culinary", "location-europe"],
      images: [
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80",
        "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      ]
    },
    {
      title: "Marrakech",
      region: "Morocco",
      description: "Marrakech is a vibrant city in Morocco, known for its bustling markets, historic architecture, and lively cultural scene. Visitors can explore the medina, visit the stunning Bahia Palace, and sample delicious Moroccan cuisine.",
      tags: ["type-city", "society-architecture", "society-sightseeing", "society-culinary", "society-night", "location-africa"],
      images: [
        "https://images.unsplash.com/photo-1580746738099-1cb74f972feb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1848&q=80",
        "https://images.unsplash.com/photo-1597212618440-806262de4f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
      ]
    },                    
]

function Explore() {

  useEffect(() => {
    document.title = `Explore`
  })

  return (
      <ExplorePage>
        <NavbarComponent active='explore' />
        <ExplorePageContainer>
          <HeadingContainer>
            <ExploreHeading>Explore <EmojiImg size="45px" emoji="🧭"/></ExploreHeading>
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
