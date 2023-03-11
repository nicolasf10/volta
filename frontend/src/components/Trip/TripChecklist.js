import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
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
    const [trip, setTrip] = useState({...props.trip})

    useEffect(() => {
        console.log(trip);
        setTrip(props.trip);
        
    }, [props.trip])

    // const [{ isOver }, dropRef] = useDrop({
    //     accept: 'item',
    //     // drop: (item) => setBasket((basket) => 
    //     //                     !basket.includes(item) ? [...basket, item] : basket),
    //     // collect: (monitor) => ({
    //     //     isOver: monitor.isOver()
    //     // })
    // })
    
    console.log(trip)
    return (
        trip ?
            <PageContainer>
                <div className="container checklist-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 checklist-column">
                            <ColumnTitle>To-do</ColumnTitle>
                            <ItemsContainer>
                                {trip.checklist.map((item) => {
                                    return(
                                        item.status === "to-do" ?
                                            <ChecklistItem members={trip.members} item={item}/>
                                        :
                                            <></>
                                    )
                                })}
                                <AddItem />
                            </ItemsContainer>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 checklist-column">
                            <ColumnTitle>Completed</ColumnTitle>
                            <ItemsContainer>
                            {trip.checklist.map((item) => {
                                    return(
                                        item.status === "completed" ?
                                            <ChecklistItem members={trip.members} item={item} />
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
