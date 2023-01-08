import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ListCategory from './ListCategory';


const ListsContainer = styled.div`
    margin: 0;
    padding: 30px 0px 0px 0px;
    width: 80vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-auto-rows: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    background-color: #fff;
`


function TripLists(props) {
    const [ trip, setTrip ] = useState(props.trip);

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
    }, [])

    return (
        <ListsContainer>
            {
                trip.lists.map((item) => (
                    <ListCategory list={item} />
                ))
            }
        </ListsContainer>
    );
}

export default TripLists;
