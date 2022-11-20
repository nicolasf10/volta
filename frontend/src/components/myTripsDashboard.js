import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import logo from './../images/logo1.svg';
import styled from 'styled-components';

function MyTripsDashboard()
{
 
    let trips = [
        {
            id: "italy",
            title: "Italy",
            emoji: "🇮🇹",
            date: "9th of Oct. to 15th of Oct. 2022",
            image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80",
            members: [
                {
                    username: "Ju",
                    img: "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                },
                {
                    username: "Nick",
                    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
                    username: "José",
                    img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                }
            ]
        },
        {
            id: "spain",
            title: "Spain",
            emoji: "🇪🇸",
            date: "3th of Nov. to 8th of Nov. 2022",
            image: "https://images.unsplash.com/photo-1593368858664-a7fe556ab936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
            members: [
                {
                    username: "Ju",
                    img: "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                }
            ]},
        {
            id: "brazil",
            title: "Brazil",
            emoji: "🇧🇷",
            date: "3th of Jan. to 13th of Jan. 2023",
            image: "https://images.unsplash.com/photo-1551312183-66bca7944e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80",
            members: [
                {
                    username: "Ju",
                    img: "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                },
                {
                    username: "Nick",
                    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
                    username: "José",
                    img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                }
            ]},
        {
            id: "japan",
            title: "Japan",
            emoji: "🇯🇵",
            date: "1th of Jul. to 7th of July. 2023",
            image: "https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            members: [
                {
                    username: "Ju",
                    img: "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                },
                {
                    username: "Nick",
                    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
                    username: "José",
                    img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                }
            ]},
        {
            id: "australia",
            title: "Australia",
            emoji: "🇦🇺",
            date: "2th of Sep. to 10th of Sep. 2023",
            image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1739&q=80",
            members: [
                {
                    username: "Ju",
                    img: "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                },
                {
                    username: "Nick",
                    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
            ]},
        {
            id: "canada",
            title: "Canada",
            emoji: "🇨🇦",
            date: "21th of Sep. to 29th of Sep. 2023",
            image: "https://images.unsplash.com/photo-1501114676295-bbbcc7a12466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            members: [
                {
                    username: "Ju",
                    img: "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                },
                {
                    username: "Nick",
                    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
                    username: "José",
                    img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                }
            ]},
    ]

    // trips = []

    const MyTripsDashboardContainer = styled.div`
        padding: 30px;
    `

    const MyTripsHeading = styled.h1`
        font-family: 'Sen', sans-serif;
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

        background-color: lightblue;
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
            display: inline;
            transition: all 0.3s ease;
            opacity: 1;
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
        height: inherit;
        vertical-align: bottom;
        margin: 0;
        display: table-cell;
    `

    const TripTitle = styled.h3`
        color: #fff;
        font-family: 'Sen', sans-serif;
        text-transform: uppercase;
        font-weight: 700;
        -webkit-text-stroke: 0.3px #000;
    `

    const TripDate = styled.p`
        color: #EDEDED;
        -webkit-text-stroke: 0.3px #000;
        font-weight: 600;
        font-size: 1.2rem;
    `

    const IconsContainer = styled.div`
        font-size: 1.4rem;
        display: none;
        color: #fff;
        position: absolute;
        opacity: 0;
        transition: all 0.3s ease;
        top: 15px;
        right: 20px;
    `

    const NewTripButton = styled.button`
        float: right;
        font-size: 1.1rem;
        border-radius: 7px;
        padding: 7.5px 15px;
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

    return (
        <MyTripsDashboardContainer>
            <MyTripsHeading>My Trips ✈️ <NewTripButton>New Trip</NewTripButton></MyTripsHeading>
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
                                            <TripTitle>{trip.title} {trip.emoji}</TripTitle>
                                            <TripDate>{trip.date}</TripDate>
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