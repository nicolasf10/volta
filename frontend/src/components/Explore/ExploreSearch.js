import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NavbarComponent from '../../components/Navbar';
import Globe from 'react-globe.gl';


const ExploreSearchContainer = styled.div`
    
`

const GlobeContainer = styled.div`

`

const N = 1;
const gData = [...Array(N).keys()].map(() => ({
  lat: -22.9110137,
  lng: -43.2093727,
  size: 0.6,
  color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)]
}));

function ExploreSearch() {
  return (
        <ExploreSearchContainer className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
                <GlobeContainer>
                    <Globe
                        height="500"
                        width="500"
                        // globeImageUrl={worldMap}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                        backgroundColor="rgb(0,0,0,0)"
                        pointsData={gData}
                        pointAltitude="size"
                        pointColor="color"
                    />
                </GlobeContainer>
            </div>
            <div className="col-lg-6 col-md-12">hey</div>
          </div>
        </ExploreSearchContainer>
  );
}

export default ExploreSearch;
