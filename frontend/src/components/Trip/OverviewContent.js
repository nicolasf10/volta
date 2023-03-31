import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faNoteSticky, faLink, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import BlocksArea from './BlocksArea';


const ContentContainer = styled.div`
    width: 70vw;
    background: #fff;
    padding: 20px;

    @media screen and (max-width: 1001px) {
        width: 100vw;
    }
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

const BlocksOption = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
`

const BlockOption = styled.li`

`

const BlockButton = styled.button`
    border: none;
    width: 100%;
    text-align: center;
    padding: 10px 5px;
    background: none;
    font-family: "Sen", sans-serif;

    &:hover {
        background: #EEEEEE;
    }
`


function OverviewContent(props) {
    const [trip, setTrip] = useState(props.trip)

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        
    }, [props.trip])

    const popupStyle = {borderRadius:'10px', width: "255px", height: "auto", padding: "0px"};


    return (
        <ContentContainer>
            <OverviewHead>
                <OverviewTitle>Hey, welcome to your {trip.title} trip</OverviewTitle>
                <Popup
                    trigger={open => (
                        <AddBlockButton><FontAwesomeIcon icon={faPlus}/> Add Block</AddBlockButton>
                    )}
                    position="left center"
                    contentStyle={popupStyle}
                    closeOnDocumentClick
                >
                    <BlocksOption>
                        <BlockOption><BlockButton><FontAwesomeIcon icon={faNoteSticky} /> Notes</BlockButton></BlockOption>
                        <BlockOption><BlockButton><FontAwesomeIcon icon={faLink} /> Resources</BlockButton></BlockOption>
                        <BlockOption><BlockButton><FontAwesomeIcon icon={faDollarSign} /> Budget</BlockButton></BlockOption>
                    </BlocksOption>
                </Popup>
            </OverviewHead>
            <BlocksArea trip={trip}/>
        </ContentContainer>
    );
}

export default OverviewContent;
