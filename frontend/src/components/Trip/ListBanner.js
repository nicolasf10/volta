import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const BannerContainer = styled.div`
    position: relative;
    border-radius: inherit;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    height: 150px;
    border-bottom: 2.5px solid #000;
    box-sizing: border-box;
`

const BannerHeader = styled.div`
    color: #000;
    background-color: #fff;
    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;
    border-radius: 10px;
`

const BannerTitle = styled.p`
    font-weight: 700;
    font-size: 1.7em;
    font-family: 'Lora', serif;
    text-transform: uppercase;
    margin: 0px;
`

const BackgroundImg = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    border-radius: inherit;
    z-index: 1;
`

const IconsContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    z-index: 5;
    font-size: 1.1em;
`

const IconI = styled.i`
    color: #fff;
    cursor: pointer;
    margin-right: 10px;
`


function ListBanner(props) {
    const [ list, setList ] = useState(props.list);

    useEffect(() => {
        console.log(props.list);
        setList(props.list);
    }, [props.list])

    
    return (
        <BannerContainer background={list.img}>
            <BackgroundImg src={list.img}/>
            <BannerHeader>
                <BannerTitle>{list.title}</BannerTitle>
            </BannerHeader>
            <IconsContainer>
                <IconI className="fa fa-solid fa-image"></IconI>
                <IconI className="fa fa-solid fa-pencil"></IconI>
            </IconsContainer>
        </BannerContainer>
    );
}

export default ListBanner;
