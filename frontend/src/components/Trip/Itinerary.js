import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import EmojiImg from '../EmojiImg';
import Day from './Day';


const StyledItinerary = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 20px;
`;


function Itinerary(props) {
    const [ trip, setTrip ] = useState(props.trip);

    useEffect(() => {
        setTrip(props.trip);
    }, [props.trip])

    
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        if (activeIndex == index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <StyledItinerary>
        {trip.itinerary.map((day, index) => (
            <Day
                key={index}
                day={day}
                index={index}
                activeIndex={activeIndex}
                onTitleClick={onTitleClick}
            />
        ))}
        </StyledItinerary>
    )
}

export default Itinerary;
