import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { db } from '../../firebase.js';
import AddItem from './AddItem.js';
import ChecklistItem from './ChecklistItem.js';
// import { useDrop } from 'react-dnd';

const PageContainer = styled.div`
    width: 100vw;
`

const ColumnTitle = styled.h4`
    font-weight: 550;
    font-family: "Lora", sans-serif;
    margin-bottom: 15px;
` 

const ItemsContainer = styled.div`
    /* background-color: red; */
    padding: 0px 50px;
` 

function TripChecklist(props) {
    const [trip, setTrip] = useState({...props.trip});
    const [additions, setAdditions] = useState([]);

    useEffect(() => {
        console.log(trip);
        setTrip(props.trip);
        console.log('REDO')
        
    }, [props.trip])

    const addItem = useCallback((newItem) => {
        // console.log(trip.checklist);

        updateTrip();
        

        // setTrip(
        //     prevState => ({
        //         ...prevState,
        //         checklist: trip.checklist.concat([...additions, newItem])
        //     })
        // )
        
        // setAdditions(additions.concat([newItem]))

    }, []);

    async function updateTrip() {
        const tripRef = doc(db, "trips", props.id);
        const docSnap = await getDoc(tripRef);
        const currentTrip = docSnap.data();
        setTrip(currentTrip)
    }

    const handleCheck = useCallback((item) => {
        handleCheckAsync(item);
    }, []);

    async function handleCheckAsync(item) {
        const tripRef = doc(db, "trips", props.id);
        const docSnap = await getDoc(tripRef);
        const currentTrip = docSnap.data();

        var newChecklist = currentTrip.checklist.filter(i => item.title.localeCompare(i.title) !== 0);
        console.log(newChecklist)

        newChecklist.push(item)
        // setTrip(
        //     prevState => ({
        //         ...prevState,
        //         checklist: newChecklist
        //     })
        // )

        console.log(newChecklist)

        updateDoc(tripRef, {
            checklist: newChecklist
        }).then(() => {
            console.log("Item added")
            // updateTrip()
        }).catch(error => console.log(error.message));
    }

    const handleDelete= useCallback((item) => {
        handleDeleteAsync(item);
    }, []);

    async function handleDeleteAsync(item) {
        const tripRef = doc(db, "trips", props.id);
        const docSnap = await getDoc(tripRef);
        const currentTrip = docSnap.data();

        var newChecklist = currentTrip.checklist.filter(i => item.title.localeCompare(i.title) !== 0);
        updateDoc(tripRef, {
            checklist: newChecklist
        }).then(() => {
            console.log("Item added")
            // updateTrip()
        }).catch(error => console.log(error.message));
    }


    
    console.log(trip)
    return (
        trip ?
            <PageContainer style={{display: props.display}}>
                <div className="container checklist-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 checklist-column">
                            <ColumnTitle>To-do</ColumnTitle>
                            <ItemsContainer>
                                {trip.checklist.concat(additions).map((item, index) => {
                                    return(
                                        item.status === "to-do" ?
                                            <ChecklistItem id={props.id} trip={trip} handleDelete={handleDelete} handleCheck={handleCheck} key={`${item.title}-${index*Math.random()}`} members={trip.members} item={item}/>
                                        :
                                            <></>
                                    )
                                })}
                                <AddItem trip={trip} id={props.id} addItem={addItem} />
                            </ItemsContainer>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 checklist-column">
                            <ColumnTitle>Completed</ColumnTitle>
                            <ItemsContainer>
                            {trip.checklist.concat(additions).map((item, index) => {
                                    return(
                                        item.status === "completed" ?
                                            <ChecklistItem id={props.id} trip={trip} handleDelete={handleDelete} handleCheck={handleCheck} key={`${item.title}-${index*Math.random()}`} members={trip.members} item={item} />
                                        :
                                            <></>
                                    )
                                })}
                            </ItemsContainer>
                        </div>
                    </div>
                </div>

            </PageContainer>
        :
            <p>error</p>
    );
}

export default TripChecklist;
