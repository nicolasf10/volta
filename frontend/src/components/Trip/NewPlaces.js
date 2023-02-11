import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Place from './Place';


const PlacesContainer = styled.div`
    
`


function NewPlaces(props) {
    const [ list, setList ] = useState(props.list);

    useEffect(() => {
        console.log(props.list);
        setList(props.list);
    }, [])

    //test
    return (
        <PlacesContainer>
            {list.items.map((item, index) => (
                <Place item={item} new={true} />
            ))}
        </PlacesContainer>
    );
}

export default NewPlaces;
