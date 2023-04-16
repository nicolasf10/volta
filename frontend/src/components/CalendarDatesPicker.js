import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from '../firebase';
import { doc, Timestamp, updateDoc } from 'firebase/firestore';



const CalendarContainer = styled.div`

`


function CalendarDatesPicker(props) {
    const [ trip, setTrip ] = useState(props.trip);
    const [startDate, setStartDate] = useState(props.trip.date.start.toDate());
    const [endDate, setEndDate] = useState(props.trip.date.end.toDate());

    const [ newStart, setNewStart ] = useState(null);
    const [ newEnd, setNewEnd ] = useState(null);

    async function onChange (dates) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);

      props.updateDate(
        {
            start: Timestamp.fromDate(start),
            end: Timestamp.fromDate(end)
        }
      )

      const tripRef = doc(db, "trips", props.id);

      if (start && end) {
          await updateDoc(tripRef, {
            date: {
                start: Timestamp.fromDate(start),
                end: Timestamp.fromDate(end)
            }
          });
      }
    };

    const onSelect = (date) => {
        if (!newStart) {
            setNewStart(date);
        } else {
            setNewEnd(date);
        }
        console.log(date);
    }

    useEffect(() => {
        setTrip(props.trip)
    }, [])

    return (
        <CalendarContainer>
            <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                onSelect={onSelect}
            />
        </CalendarContainer>
    );
}


export default CalendarDatesPicker;