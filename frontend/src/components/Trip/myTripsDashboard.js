import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import logo from './../../images/logo1.svg';
import styled from 'styled-components';
import EmojiImg from '../EmojiImg';


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

    &:hover, &focus {
        background-size: 0 0.1em, 100% 0.1em;
        color: #000;
    }
`

const Trip = styled.div`
    width: 280px;
    height: 500px;
    border-radius: 30px;
    padding: 0px 20px;
    -webkit-box-shadow: 5px 5px 11px 3px rgba(0,0,0,0.36); 
    box-shadow: 5px 5px 11px 3px rgba(0,0,0,0.36);
    display: flex;
    flex-direction: column;
    justify-content: end;

    background-color: #081736;
    background-image: url(${props => props.image ? props.image : "none"};);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform 0.2s ease;
    margin: 20px auto;

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }

    &:hover .icons-container {
        transition: all 0.3s ease;
        opacity: 1;
        display: flex;
    }

    @media (max-width: 991px) {
        & {
            width: 300px;
            height: 400px;
        }
    }

    @media (max-width: 768px) {
        & {
            width: 100%;
            height: 400px;
        }
    }
`

const TripDetails = styled.div`
    align-self: end;
    justify-self: end;
    margin: 0px 0px 15px 0px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
`

const TripDate = styled.p`
    color: #333333;
    font-weight: 600;
    font-size: 1rem;
    font-family: "Sen", sans-serif;
    margin: 0px;
`

const IconsContainer = styled.div`
    font-size: 1.4rem;
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15px;
    right: 20px;
    opacity: 0;
    transition: all 0.15s ease;
    color: #000;
    border-radius: 100px;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 100px;
    padding: 5px 10px;

    &:hover {
        background-color: #fff;
    }
`

const NewTripButton = styled.button`
    float: right;
    font-size: 1.1rem;
    border-radius: 7px;
    padding: 7.5px 15px;
    height: 40px;
    font-family: "Sen", sans-serif;
    color: #fff;
    border: none;
    background-color: #1746A2;
    transition: all 0.2s ease;
    outline: 1px solid var(--darkBlue);

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

const TripTitle = styled.h3`
    color: #000;
    display: inline;
    font-family: 'Lora', serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.7em;
    display: flex;
    justify-content: start;
    align-items: center;
`

function MyTripsDashboard(props)
{
 
    const [trips, setTrips] = useState(props.trips);

    useEffect(() => {
        setTrips(props.trips);
    }, [props.trips])

    return (
        <MyTripsDashboardContainer>
            <MyTripsHeading>My Trips <EmojiImg size="45px" emoji="✈️"/> <NewTripButton>New Trip</NewTripButton></MyTripsHeading>
            <div className="container">
                <div className="dashboard-row row">
                        {trips.length > 0 ?
                        trips.map((trip) => (
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <Link className='no-underline' to="/trip" state={{trip: trip}}>
                                    <Trip image={trip.image}>
                                        <IconsContainer className='icons-container'>
                                            <i class="fa fa-solid fa-trash"></i>
                                        </IconsContainer>
                                        <TripDetails>
                                            <TripTitle>{trip.title} {<EmojiImg size="33px" emoji={trip.emoji}/>}</TripTitle>
                                            <TripDate>{ trip.date}</TripDate>
                                        </TripDetails>
                                    </Trip>
                                </Link>
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