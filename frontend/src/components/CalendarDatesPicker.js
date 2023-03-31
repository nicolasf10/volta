import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const CalendarContainer = styled.div`

`
function CalendarDatesPicker(props) {
    const [ trip, setTrip ] = useState(props.trip);
    const [startDate, setStartDate] = useState(props.trip.date.start.toDate());
    const [endDate, setEndDate] = useState(props.trip.date.end.toDate());

    const [ newStart, setNewStart ] = useState(null);
    const [ newEnd, setNewEnd ] = useState(null);

    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
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