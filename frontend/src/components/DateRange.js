import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';


function DateRange(props) {
    const [date, setTrip] = useState(props.date);
    const [ range, setRange ] = useState(`${props.date.start.toLocaleDateString()} to ${props.date.end.toLocaleDateString()}`)

    return (
        <span>
            {range}
        </span>
    );
}

export default DateRange;
