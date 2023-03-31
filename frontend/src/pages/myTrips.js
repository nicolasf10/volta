import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import NavbarComponent from '../components/Navbar';
import styled from 'styled-components';
import MyTripsDashboard from '../components/Trip/myTripsDashboard';
import { TripsData } from './TripsData';
import { getTrips } from '../firebase';
import AuthProvider, { AuthContext } from '../Auth';
import { useNavigate } from 'react-router-dom';

const MyTripsPage = styled.div`
    /* background-color: #FFF7E9;
    min-height: 100vh; */
`

function MyTrips()
{

    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {

        if (!currentUser) {
            navigate('/login');
        }

        console.log(currentUser);
    }, [])

    return (
        // <AuthProvider>
            <MyTripsPage>
                <NavbarComponent active='my-trips' />
                {
                    currentUser ? <MyTripsDashboard/> : <></>
                }
            </MyTripsPage>
        // </AuthProvider>
    );
}


export default MyTrips;