import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ListCategory from './ListCategory';
import NewList from './NewList';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';


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

    const saveList = useCallback((item) => {
        setTrip(prevTrip => ({
            ...prevTrip,
            lists: [...prevTrip.lists, item]
        }));
    }, []);

    const deleteList = useCallback((updatedLists) => {
        updateTrips()
        props.refreshTrip()
    }, []);


    async function updateTrips() {
        const tripRef = doc(db, "trips", props.id);
        const docSnap = await getDoc(tripRef).then()

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            var tripResponse = docSnap.data()
            setTrip(tripResponse)
        }
        else {
            console.log("Doesn't exist")
        }
    }

    return (
        <ListsContainer style={{display: props.display}}>
            {
                trip.lists.map((item) => (
                    <ListCategory refreshTrip={props.refreshTrip} updateTrip={props.updateTrip} key={item.title} deleteList={deleteList} trip={trip} id={props.id} list={item} />
                ))
            }
            <NewList id={props.id} trip={trip} saveList={saveList} />
        </ListsContainer>
    );
}

export default TripLists;
