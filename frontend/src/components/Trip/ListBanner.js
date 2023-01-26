import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const BannerContainer = styled.div`
    background: lightblue;
    border-radius: inherit;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    height: 100px;

    background-color: lightblue;
    background-image: url(${props => props.background ? props.background : "none"};);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const BannerHeader = styled.p`
    border: 3px dotted green;
`

const BannerTitle = styled.p`
    color: #000;
    background-color: #fff;
    border: 3px red solid;
    display: inline-block;
    font-family: 'Lora', serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.7em;
    display: flex;
    justify-content: start;
    align-items: center;
`


function ListBanner(props) {
    const [ list, setList ] = useState(props.list);

    useEffect(() => {
        console.log(props.list);
        setList(props.list);
    }, [props.list])

    
    return (
        <BannerContainer background={list.img}>
            <BannerHeader>
                <BannerTitle>{list.title}</BannerTitle>
            </BannerHeader>
        </BannerContainer>
    );
}

export default ListBanner;
