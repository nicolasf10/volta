import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Place from './Place';


const PlacesContainer = styled.div`
    padding: 10px;
    overflow-y: scroll;
    position: relative;
    max-height: calc(100% - 160px);
    border: 3px red solid;
`


function ExistingPlaces(props) {
    const [ list, setList ] = useState(props.list);

    useEffect(() => {
        console.log(props.list);
        setList(props.list);



    }, [])

    //test
    return (
        <PlacesContainer>
            {list.items.map((item, index) => (
                <Place item={item} new={false} />
            ))}
        </PlacesContainer>
    );
}

export default ExistingPlaces;
