import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import BlocksArea from './BlocksArea';

const ContentContainer = styled.div`
    height: 300px;
    width: 70vw;
    height: 100vh;
    background: #fff;
    padding: 15px;
`

const OverviewTitle = styled.h4`
    font-family: "Lora", sans-serif;
    font-weight: 600;
`

const AddBlockButton = styled.button`
    background-color: #1746A2;
    color: #fff;
    border: none;
    border-radius: 100px;
    padding: 5px 10px;
    font-family: "Sen", sans-serif;
`

const OverviewHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`


function OverviewContent(props) {
    const [trip, setTrip] = useState(props.trip)

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        
    }, [props.trip])

    return (
        <ContentContainer>
            <OverviewHead>
                <OverviewTitle>Hey, welcome to your {trip.title} trip</OverviewTitle>
                <AddBlockButton><FontAwesomeIcon icon={faPlus}/> Add Block</AddBlockButton>
            </OverviewHead>
            <BlocksArea/>
        </ContentContainer>
    );
}

export default OverviewContent;
