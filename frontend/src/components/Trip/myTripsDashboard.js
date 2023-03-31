import React, { useState, useEffect, useContext, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../Auth';
import EmojiImg from '../EmojiImg';
import NewTrip from './NewTrip';
import TripItemDashboard from './TripItemDashboard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import WorldLoader from '../WorldLoader';


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

const ExploreLink = styled.span`
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

const Loader = styled.div`
    margin-top: 100px;
`


function MyTripsDashboard(props)
{
    const [trips, setTrips] = useState([]);
    const [ tripss, setTripss ] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        console.log(currentUser);
        document.title = `My Trips`
        getTrips(); // firebase
    }, [])

    function getTrips() {
        setLoading(true);
        console.log(currentUser.uid)
        const tripsCollectionRef = query(collection(db, "trips"), where("users", "array-contains", currentUser.uid));
        getDocs(tripsCollectionRef).then(response => {
            console.log(response);
            const tripsResponse = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id
            }))
            console.log(tripsResponse);
            setTrips(tripsResponse);
            setLoading(false);
        }).catch(error => console.log(error.message));
    }

    const updateTrips = useCallback(() => {
        getTrips()
    }, []);

    return (
        <MyTripsDashboardContainer>
            <MyTripsHeading>My Trips <EmojiImg size="45px" emoji="✈️"/> <NewTrip updateTrips={updateTrips} /></MyTripsHeading>
            <div className="container">
                <div className="dashboard-row row">
                        {trips.length > 0 ?
                        trips.map((trip, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                <TripItemDashboard updateTrips={updateTrips} id={trip.id} trip={trip.data}/>
                            </div>
                        )) :
                            <>
                                { loading ?
                                    <Loader>
                                        <WorldLoader/>
                                    </Loader>
                                    :
                                    <NoTrips><HeadingSpan>Oh no! You better start planning your next trip. <Link to="/explore" style={{textDecoration: 'none'}}><ExploreLink>Explore<EmojiSpan> 🌎</EmojiSpan></ExploreLink></Link></HeadingSpan></NoTrips>
                                }
                            </>
                        }
                </div>
            </div>
        </MyTripsDashboardContainer>
    );
}


export default MyTripsDashboard;