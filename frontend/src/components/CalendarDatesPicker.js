import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const CalendarContainer = styled.div`

`
function CalendarDatesPicker(props) {
    const [ trip, setTrip ] = useState(props.trip);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };

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
            />
        </CalendarContainer>
    );
}


export default CalendarDatesPicker;