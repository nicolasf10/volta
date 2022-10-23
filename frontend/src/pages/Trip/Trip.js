import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom'
import TripBanner from '../../components/TripBanner';


const TripPage = styled.div`
    background-color: gold;
`

function Trip() {
    const location = useLocation();
    const navigate = useNavigate();
    const [trip, setTrip] = useState(null);

    useEffect(() => {
        if (!location.state) {
            console.log("rerouting");
            navigate("/");
        } else {
            setTrip(location.state.trip);
        }
    }, []);

    

    return (
        trip != null ?
        <TripPage>
            <TripBanner trip={trip}/>
        </TripPage>
        : 
        <></>
    );
}

export default Trip;
