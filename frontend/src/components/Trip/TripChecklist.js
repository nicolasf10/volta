import { doc, updateDoc } from 'firebase/firestore';
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
        console.log(trip.checklist);

        

        // setTrip(
        //     prevState => ({
        //         ...prevState,
        //         checklist: trip.checklist.concat([...additions, newItem])
        //     })
        // )
        
        setAdditions(additions.concat([newItem]))

    }, []);

    const handleCheck = useCallback((item) => {
        var newChecklist = trip.checklist.filter(i => item.title.localeCompare(i.title) !== 0);
        
        console.log('!!!!')
        console.log(newChecklist)
        console.log('!!!!')        
        
        newChecklist.push(item)
        setTrip(
            prevState => ({
                ...prevState,
                checklist: newChecklist
            })
        )

        const tripRef = doc(db, "trips", props.id);
        updateDoc(tripRef, {
            checklist: newChecklist
        }).then(() => {
            console.log("Item added")
        }).catch(error => console.log(error.message));
        
    }, [])
    
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
                                            <ChecklistItem handleCheck={handleCheck} key={index*Math.random()} members={trip.members} item={item}/>
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
                                            <ChecklistItem handleCheck={handleCheck} key={index*Math.random()} members={trip.members} item={item} />
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
