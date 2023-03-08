import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NavbarComponent from '../components/Navbar';
import { Link } from 'react-router-dom';


const ErrorPage = styled.div`

`

const ErrorContainer = styled.div`
    font-family: "Lora", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 180px);
`

const ErrorHeader = styled.h1`
    font-size: 8em;
`

const ErrorTitle = styled.h1`
    font-size: 3em;
`

const ErrorText = styled.p`
    font-family: "Sen", sans-serif;
    font-size: 1.2em;
    margin-top: 20px;
`

function Error() {
  return (
    <ErrorPage>
        <NavbarComponent active='home' />
        <ErrorContainer>
            <ErrorHeader>
                404
            </ErrorHeader>
            <ErrorTitle>
                Page not found!
            </ErrorTitle>
            <ErrorText>
                The page you're looking for doesn't exist. Go to <Link to="/">Home Page</Link>.
            </ErrorText>
        </ErrorContainer>
    </ErrorPage>
  );
}

export default Error;
