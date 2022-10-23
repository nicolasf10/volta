import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ShareContainer = styled.div`
    margin-top: 10px;
    margin-right: 20px;
    float: right;
`

function TripShareContainer(props) {
    const [members, setMembers] = useState(props.members);
    
    return (
        <ShareContainer>
            <button type="button" class="btn btn-primary">Share</button>
        </ShareContainer>
    );
}

export default TripShareContainer;
