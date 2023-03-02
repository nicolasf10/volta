import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Accomodations from './Accomodations';
import Flights from './Flights';

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: end;
    padding-top: 20px;
`

const Title = styled.h2`
    font-family: "Lora", serif;
    text-align: center;
`

function TripFlights(props) {
    const [trip, setTrip] = useState(props.trip)

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        
    }, [props.trip])

    return (
        <PageContainer>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <Title>Flights</Title>
                        <Flights trip={trip}/>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <Title>Accomodations</Title>
                        <Accomodations trip={trip}/>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}

export default TripFlights;
