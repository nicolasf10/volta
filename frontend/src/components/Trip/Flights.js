import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const FlightsContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 350px);
    background: rgb(245, 247, 249);
    padding: 10px;
    margin: 0px;
`

const SearchWidget = styled.div`
    width: 100%;
    height: 100%;
`

const FlightsTitle = styled.h2`
    font-family: "Lora", sans-serif;
    font-weight: 600;
    margin-top: 15px;
    text-align: center;
`

const FlightsLinkHeader = styled.h4`
    font-family: "Sen", sans-serif;
    text-align: center;
    margin-bottom: 15px;
`

const FlightsLink = styled.a`
    text-decoration: none;
    font-style: italic;
    font-size: 0.8em;
    color: #081736;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.2s ease-in-out;

    &:hover {
        color: #1746A2;
        border-bottom: 30px solid #1746A2;
        border-bottom: 2px solid #1746A2;
    }
`

function Flights(props) {
    const [trip, setTrip] = useState(props.trip);
    const [ afterOffestStart, setAfterOffesetStart ] = useState(new Date(trip.date.start.toDate() - trip.date.start.toDate().getTimezoneOffset() * 60000));
    const [ afterOffestEnd, setAfterOffesetEnd ] = useState(new Date(trip.date.end.toDate() - trip.date.end.toDate().getTimezoneOffset() * 60000));

    const [ kiwiLink, setKiwiLink ] = useState(`https://www.kiwi.com/deep?affilid=nicolasfuchsvoltadeeplinks&currency=EUR&departure=${afterOffestStart.toISOString().split('T')[0]}_${afterOffestStart.toISOString().split('T')[0]}&destination=DE&lang=en&pageName=tilesPage&return=${afterOffestEnd.toISOString().split('T')[0]}_${afterOffestEnd.toISOString().split('T')[0]}`);


    useEffect(() => {
        const script = document.createElement('script');
        console.log(kiwiLink)
      
        script.src = "https://widgets.kiwi.com/scripts/widget-search-iframe.js";
        script.setAttribute('data-lang','en');
        script.setAttribute('data-affilid','nicolasfuchsvoltaflights');
        script.setAttribute('data-to', trip.place_code);
        script.setAttribute('data-primary-color','1746a2');
        script.setAttribute('data-results-only','true');
        script.setAttribute('data-departure',  afterOffestStart.toISOString().split('T')[0])
        script.setAttribute('data-return', afterOffestEnd.toISOString().split('T')[0])
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <FlightsContainer>
            <FlightsTitle>Flights</FlightsTitle>
            <FlightsLinkHeader><FlightsLink target="_blank" href={kiwiLink}>Open kiwi.com</FlightsLink></FlightsLinkHeader>
            <div id="widget-holder"></div>
        </FlightsContainer>
    );
}

export default Flights;
