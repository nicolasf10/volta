import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const Item = styled.div`

`

const ItemTitle = styled.p`

`


function ChecklistItem(props) {
    const [thisItem, setThisItem] = useState(props.item)
    
    return (
        <Item>
            <ItemTitle>{thisItem.title}</ItemTitle>
        </Item>
    );
}

export default ChecklistItem;
