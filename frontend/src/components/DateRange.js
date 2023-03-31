import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';


function DateRange(props) {
    const navigate = useNavigate();
    const [ range, setRange ] = useState(null)
    // const [date, setDate] = useState({
    //     start: props.date.start.toDate(),
    //     end: props.date.end.toDate(),
    // });

    useEffect(() => {
        if (!props.date || !props.date.start) {
            navigate('/trips');
        } else {
            setRange(`${props.date.start.toDate().toLocaleDateString()} to ${props.date.end.toDate().toLocaleDateString()}`);
        }
    });

    return (
        <span>
            {range}
        </span>
    );
}

export default DateRange;
