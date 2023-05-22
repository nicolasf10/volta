import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
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
    const [ afterOffestStart, setAfterOffesetStart ] = useState('');
    const [ afterOffestEnd, setAfterOffesetEnd ] = useState('');
    const navigate = useNavigate();

    const [ kiwiLink, setKiwiLink ] = useState('');


    useEffect(() => {
        setTrip(props.trip)
        console.log(props)
        console.log('whoa!!')
        try {
            var tempAfterOffsetStart = new Date(props.trip.date.start.toDate() - props.trip.date.start.toDate().getTimezoneOffset() * 60000)
            var tempAfterOffsetEnd = new Date(props.trip.date.end.toDate() - props.trip.date.end.toDate().getTimezoneOffset() * 60000)
            setAfterOffesetStart(tempAfterOffsetStart)
            setAfterOffesetEnd(tempAfterOffsetEnd)

            setKiwiLink(`https://www.kiwi.com/deep?affilid=nicolasfuchsvoltadeeplinks&currency=EUR&departure=${tempAfterOffsetStart.toISOString().split('T')[0]}_${tempAfterOffsetStart.toISOString().split('T')[0]}&destination=${props.trip.place_code}&lang=en&pageName=tilesPage&return=${tempAfterOffsetEnd.toISOString().split('T')[0]}_${tempAfterOffsetEnd.toISOString().split('T')[0]}`)
            const script = document.createElement('script');
            console.log(kiwiLink)
        
            script.src = "https://widgets.kiwi.com/scripts/widget-search-iframe.js";
            script.setAttribute('data-lang','en');
            script.setAttribute('data-affilid','nicolasfuchsvoltaflights');
            script.setAttribute('data-to', props.trip.place_code);
            script.setAttribute('data-primary-color','1746a2');
            script.setAttribute('data-results-only','true');
            script.setAttribute('data-departure',  tempAfterOffsetStart.toISOString().split('T')[0])
            script.setAttribute('data-return', tempAfterOffsetEnd.toISOString().split('T')[0])
            script.async = true;
        
            document.body.appendChild(script);
        
            return () => {
            document.body.removeChild(script);
            }
        } catch (error) {
            console.log(error)
            console.log(props.trip)
            // navigate('/trips')
        }
      }, [props.trip]);

    return (
        <FlightsContainer>
            <FlightsTitle>Flights</FlightsTitle>
            <FlightsLinkHeader><FlightsLink target="_blank" href={kiwiLink}>Open kiwi.com</FlightsLink></FlightsLinkHeader>
            <div id="widget-holder"></div>
        </FlightsContainer>
    );
}

export default Flights;
