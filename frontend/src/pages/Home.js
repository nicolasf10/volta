import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NavbarComponent from '../components/Navbar';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import EmojiImg from '../components/EmojiImg';
import SecondHero from '../components/SecondHero';


const HomePage = styled.div`
    
`

const HomeContainer = styled.div`
    background-color: #081736;
`

const MainHero = styled.div`
`

const ContentContainer = styled.div`
    height: calc(100vh - 81.5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 20px 100px 50px;

    @media (max-width: 991px) {
        height: auto;
        padding-right: 50px;
    }
`

const ContentTitle = styled.h1`
    font-family: "Lora", serif;
    color: #fff;
`

const ContentText = styled.p`
    font-family: "Sen", sans-serif;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 1.1em;
`

const ContentButton = styled.button`
    background: none;
    border: 1.5px solid #fff;
    color: #fff !important;
    text-decoration: none !important;
    border-radius: 10px;
    padding: 5px;
    width: 150px;
    text-transform: uppercase;
    font-family: "Sen", sans-serif;
    transition: 0.3s all ease-in;

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

const SplineContainer = styled.div`
    position: relative;
    height: calc(100vh - 81.5px);
    .spline {
        position: absolute;
        margin: 0;
        top: 0;
        right: 0px;
        /* width: 100%; */
        height: 100%;
        min-width: 50vw;
    }

    @media (max-width: 991px) {
        .spline {
            height: auto;
            width: 100vw;
        }
    }
`


function Home() {
  return (
    <HomePage>
        <NavbarComponent active='home' />
        <HomeContainer>
            <MainHero>
                <div className="containe">
                    <div className="row">
                        <ContentContainer className="col-lg-5 col-md-12">
                            <ContentTitle><span style={{fontSize:"1.5em"}}>⛰️</span> Trip planning at it's finest — trust us.</ContentTitle>
                            <ContentText>Planning a trip can be overwhelming and time-consuming, but it doesn't have to be. Our platform is designed to make trip planning <b>easier</b> and more <b>collaborative</b>. Whether you're traveling with friends, family, or solo, our tool has everything you need to plan your <b>perfect trip</b>.</ContentText>
                            <ContentButton><Link className='button-link' to='/signup'>Sign up</Link></ContentButton>
                        </ContentContainer>
                        <SplineContainer className="col-lg-7 col-md-12">
                            <Spline className='spline' scene="https://prod.spline.design/AXqKHF8ErslZaIzT/scene.splinecode" />
                        </SplineContainer>
                    </div>
                </div>
                <div className="hide-mouse">
                    <span class="scroll-btn">
                        <span class="mouse">
                            <span>
                            </span>
                        </span>
                    </span>
                </div>
            </MainHero>
            <SecondHero id="second"/>
        </HomeContainer>
    </HomePage>
  );
}

export default Home;
