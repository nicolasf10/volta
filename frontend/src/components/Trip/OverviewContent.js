import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const ContentContainer = styled.div`

`

function OverviewContent(props) {
    const [trip, setTrip] = useState(props.trip)

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        
    }, [props.trip])

    return (
        <ContentContainer>
            overview content
        </ContentContainer>
    );
}

export default OverviewContent;
