import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const HeroContainer = styled.div`
    min-height: 50vh;
    background-color: #081736;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .quote-icon {
        color: #F1F1F1;
        font-size: 3em;
        margin-bottom: 30px;
    }
`

const Quote = styled.h2`
    color: #F1F1F1;
    font-family: "Lora", sans-serif;
    width: 100vw;
    text-align: center;
    padding: 0px 20px;
`

const ButtonsContainer = styled.div`
    margin-top: 30px;
`

const ContentButton = styled.button`
    background: none;
    border: 1px solid #F1F1F1;
    color: #fff !important;
    text-decoration: none !important;
    border-radius: 10px;
    padding: 5px;
    width: 150px;
    text-transform: uppercase;
    font-family: "Sen", sans-serif;
    transition: 0.15s all ease-in;
    margin: 0px 20px;

    .button-link {
        color: #fff;
        text-decoration: none;
    }

    &:hover {
        background-color: #fff;
        .button-link {
            color: #081736;
        }
    }
`


function ThirdHero() {
  return (
    <HeroContainer>
        <FontAwesomeIcon className='quote-icon' icon={faPlane}/>
        <Quote>
            The journey of a thousand miles begins with a single step.
        </Quote>
        <ButtonsContainer>
            <ContentButton><Link className='button-link' to='/signup'>Sign up</Link></ContentButton>
            <ContentButton><Link className='button-link' to='/login'>Log in</Link></ContentButton>
        </ButtonsContainer>
    </HeroContainer>
  );
}

export default ThirdHero;
