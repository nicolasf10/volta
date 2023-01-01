import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const AddContainer = styled.div`
    border: 1px #D6D6D6 solid;
    border-radius: 10px;
    height: 50px;
    color: #838383;
    margin-bottom: 20px;
    padding-left: 15px;
    display: flex;
    flex-direction: row;

    &:hover {
        background-color: #E8E8E8;
        cursor: pointer;
    }
`

const AddTitle = styled.h1`
    font-size: 1.05rem;
    line-height: 50px;
    text-align: left;
    /* background-color: red; */
    & i {
        margin-right: 20px;
    }
`


function AddItem(props) {
    

    return (
        <AddContainer>
            <AddTitle><i class="fa fa-solid fa-plus"></i>New</AddTitle>
        </AddContainer>
    );
}

export default AddItem;