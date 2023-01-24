import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const LoaderStyle = {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const InnerStyle = {
    width: "100px",
    height: "100px"
}


const WorldLoader = <div style={LoaderStyle}>
    <div style={InnerStyle}>
        <div className='lower-loader'><i class="fa fa-solid fa-globe"></i></div>
        <div className='higher-loader'><i className="fa fa-solid fa-plane"></i></div>
    </div>
</div>

export default WorldLoader;