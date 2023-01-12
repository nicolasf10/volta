import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const CategoryContainer = styled.div`
    background-color: #fff;
    position: relative;
    margin: 15px 15px;
    padding: 0;
    border-radius: 10px;
    width: 300px;
    height: 400px;

    perspective: 1000px;

    transition: transform 0.2s ease;

    &:hover {
        /* cursor: pointer;
        transform: scale(1.03); */

        .card-inner {
            transform: rotateY(180deg);
          }
    }
`

const Background = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
`

const CategoryTitle = styled.h1`
    position: absolute;
    left: 15px;
    bottom: 7.5px;
    color: #000;
    background-color: #fff;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.3em;
    font-family: "Sen", sans-serif;
    font-weight: 600;
`

const CardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    -webkit-box-shadow: 5px 5px 15px -6px rgba(0,0,0,0.75); 
    box-shadow: 5px 5px 15px -6px rgba(0,0,0,0.75);
    border-radius: inherit;
`

const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: inherit;
`

const CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    transform: rotateY(180deg);
`

function ListCategory(props) {
    const [ list, setList ] = useState(props.list);

    useEffect(() => {
        console.log(props);
        setList(props.list);
    }, [])

    return (
        <CategoryContainer background={list.img}>
            <CardInner className='card-inner'>
                <CardFront>
                    <Background src={list.img} alt={list.title} />
                    <CategoryTitle>{list.title}</CategoryTitle>
                </CardFront>
                <CardBack>
                    
                </CardBack>
            </CardInner>
        </CategoryContainer>
    );
}

export default ListCategory;
