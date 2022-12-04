import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const LocationPin = ({ text }) => (
    <div className="pin">
      {/* <Icon icon={locationIcon} className="pin-icon" /> */}
      <p className="pin-text">{text}</p>
    </div>
)

export default LocationPin