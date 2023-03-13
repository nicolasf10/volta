import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import EmojiImg from '../EmojiImg';
import DeleteConfirm from '../DeleteConfirm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DateRange from '../DateRange';



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
    align-self: start;
    justify-self: end;
    width: 100%;
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
    font-size: 1.3em;
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

function TripItemDashboard(props)
{
    const [trip, setTrip] = useState(props.trip);
    const [ showDelete, setShowDelete ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTrip(props.trip);
    }, [props.trip])

    const handleChildElementClick = (e) => {
        e.stopPropagation()
        setShowDelete(!showDelete);
    }

    const toggleDeleteShow = useCallback(() => {
        console.log(" toggle")
        setShowDelete(false);
    }, [setShowDelete]);


    return (
        <div onClick={() => navigate("/trip", {state: {trip: trip}})} className='no-underline' to="/trip" state={{trip: trip}}>
            <Trip image={trip.image}>
                <TripDetails>
                    <IconsContainer onClick={(e) => handleChildElementClick(e)} style={{zIndex: 10}} className='icons-container'>
                        <FontAwesomeIcon icon={faTrash} className='trash-icon'/>
                    </IconsContainer>
                    <TripTitle>{trip.title}{<EmojiImg size="33px" emoji={trip.emoji}/>}</TripTitle>
                    <TripDate><DateRange date={trip.date}/></TripDate>
                </TripDetails>
            </Trip>
            {
                showDelete ?
                    <DeleteConfirm parentCallback={toggleDeleteShow} trip={trip} />
                :
                    <></>
            }
        </div>
    );
}


export default TripItemDashboard;