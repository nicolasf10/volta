import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const ItemContainer = styled.div`
    & .item {
        border: 1px #D6D6D6 solid;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.21); 
        box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.21);
        min-height: 50px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 20px 0px;
        position: relative;
        margin-bottom: 20px;
        position: relative;
    }
`

const CompletedItem = styled.div`
    text-decoration: line-through;
    color: #838383;
`

const TodoItem = styled.div`
    
`

const ItemTitle = styled.h1`
    font-weight: 600;
    font-size: 1.2rem;
    margin: 0px;
    text-align: left;
    /* max-width: 60%; */
`

const Checkbox = styled.input`
    zoom: 1.8;
    margin: 2px 10px;
    cursor: pointer;
`

const IconsContainer = styled.div`
    /* background-color: tomato; */
    color: #606060;
    margin-left: auto;
    margin-right: 20px;
    font-size: 1.2rem;
    /* position: absolute;
    right: 0; */
    float: right;
    min-width: 60px;
    /* background-color: red; */
    /* transform: translateX(-100%); */

    & i {
        margin: 5px;
    }
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

function ChecklistItem(props) {
    const [thisItem, setThisItem] = useState(props.item)
    
    console.log(thisItem)

    return (
        thisItem.status === 'to-do'
        ?
            <ItemContainer>
                <TodoItem className="item">
                    <TitleContainer>
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <ItemTitle>{thisItem.title}</ItemTitle>
                    </TitleContainer>
                    <IconsContainer>
                        <i class="fa fa-solid fa-pencil"></i>
                        <i class="fa fa-solid fa-trash"></i>
                    </IconsContainer>
                </TodoItem>
            </ItemContainer>
        :
            <ItemContainer>
                <CompletedItem className="item">
                    <TitleContainer>
                        <Checkbox checked type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <ItemTitle>{thisItem.title}</ItemTitle>
                    </TitleContainer>
                    <IconsContainer>
                        <i class="fa fa-solid fa-pencil"></i>
                        <i class="fa fa-solid fa-trash"></i>
                    </IconsContainer>
                </CompletedItem>
            </ItemContainer>
        
    );
}

export default ChecklistItem;
