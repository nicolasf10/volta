import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ListCategory from './ListCategory';
import NewList from './NewList';


const ListsContainer = styled.div`
    margin: 0;
    padding: 30px 30px 15px 15px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fff;
    flex-wrap: wrap;
`


function TripLists(props) {
    const [ trip, setTrip ] = useState(props.trip);

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
    }, [])

    return (
        <ListsContainer style={{display: props.display}}>
            {
                trip.lists.map((item) => (
                    <ListCategory trip={trip} id={props.id} list={item} />
                ))
            }
            <NewList id={props.id} trip={trip} />
        </ListsContainer>
    );
}

export default TripLists;
