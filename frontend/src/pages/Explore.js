import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NavbarComponent from '../components/Navbar';


const ExplorePage = styled.div`
    background-color: gold;
`

function Explore() {
  return (
      <ExplorePage>
        <NavbarComponent active='explore' />
        explore
      </ExplorePage>
  );
}

export default Explore;
