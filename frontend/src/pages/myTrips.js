import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NavbarComponent from '../components/Navbar';
import styled from 'styled-components';
import MyTripsDashboard from '../components/Trip/myTripsDashboard';


const MyTripsPage = styled.div`
    /* background-color: #FFF7E9;
    min-height: 100vh; */
`

function MyTrips()
{
    return (
        <MyTripsPage>
            <NavbarComponent active='my-trips' />
            <MyTripsDashboard />
        </MyTripsPage>
    );
}


export default MyTrips;