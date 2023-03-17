import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmojiImg from '../EmojiImg';
import NewTrip from './NewTrip';
import TripItemDashboard from './TripItemDashboard';


const MyTripsDashboardContainer = styled.div`
padding: 30px;
`

const MyTripsHeading = styled.h1`
font-family: 'Lora', serif;
font-weight: 700;
opacity: 1;
margin-bottom: 30px;
`

const NoTrips = styled.h1`
font-family: 'Sen', sans-serif;
font-weight: 700;
font-size: 4rem;
margin-top: 100px;

@media (max-width: 990px) {
    font-size: 3rem;
}
`

const EmojiSpan = styled.span`
opacity:  1;
`

const HeadingSpan = styled.span`
opacity: 0.775;
`

const ExploreLink = styled.a`
    color: #292929;
    opacity: 1;
    text-decoration: none;
    cursor: pointer;
    background: 
    linear-gradient(to right, #1746A2, #1746A2),
    linear-gradient(to right, #2192FF, #38E54D);
    background-size: 100% 0.1em, 0 0.1em;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: all 400ms;

    &:hover, &:focus {
        background-size: 0 0.1em, 100% 0.1em;
        color: #000;
    }
`


function MyTripsDashboard(props)
{
    const [trips, setTrips] = useState(props.trips);
    // const [ showDelete 

    useEffect(() => {
        document.title = `My Trips`
        setTrips(props.trips);
    }, [props.trips])

    return (
        <MyTripsDashboardContainer>
            <MyTripsHeading>My Trips <EmojiImg size="45px" emoji="✈️"/> <NewTrip /></MyTripsHeading>
            <div className="container">
                <div className="dashboard-row row">
                        {trips.length > 0 ?
                        trips.map((trip, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                <TripItemDashboard trip={trip}/>
                            </div>
                        )) :
                            <NoTrips><HeadingSpan>Oh no! You better start planning your next trip. <ExploreLink>Explore<EmojiSpan> 🌎</EmojiSpan></ExploreLink></HeadingSpan></NoTrips>
                        }
                </div>
            </div>
        </MyTripsDashboardContainer>
    );
}


export default MyTripsDashboard;