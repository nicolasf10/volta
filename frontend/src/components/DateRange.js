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
        try {
            if (!props.date || !props.date.start) {
                navigate('/trips');
            } else {
                setRange(`${props.date.start.toDate().toLocaleDateString()} to ${props.date.end.toDate().toLocaleDateString()}`);
            }
        } catch (error) {
            console.log(error.message);
            navigate('/trips');
        }
        
    });

    return (
        <span>
            {range}
        </span>
    );
}

export default DateRange;
