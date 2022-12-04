import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ChecklistItem from './ChecklistItem.js';

const PageContainer = styled.div`
    width: 100vw;
`

const ColumnTitle = styled.h4`
    font-weight: 600;
    font-family: "Sen", sans-serif;
` 

const ItemsContainer = styled.div`

` 

function TripChecklist(props) {
    const [trip, setTrip] = useState({...props.trip})

    useEffect(() => {
        console.log(trip);
        setTrip(props.trip);
        
    }, [props.trip])
    
    console.log(trip)
    return (
        trip ?
            <PageContainer>
                <div className="container checklist-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 checklist-column">
                            <ColumnTitle>To-do</ColumnTitle>
                            <ItemsContainer>
                                {trip.checklist.map((item) => {
                                    return(
                                        item.status === "to-do" ?
                                            <ChecklistItem item={item} />
                                        :
                                            <></>
                                    )
                                })}
                            </ItemsContainer>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 checklist-column">
                            <ColumnTitle>Completed</ColumnTitle>
                            <ItemsContainer>
                            {trip.checklist.map((item) => {
                                    return(
                                        item.status === "completed" ?
                                            <ChecklistItem item={item} />
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
