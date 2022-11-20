import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';


const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px 0px 0px 15px;
`

const SliderImage = styled.img`

`

function ImageSlider(props) {
  return (
      <SliderContainer>
        <Carousel fade>
            {props.images.map((image) => (
                <Carousel.Item>
                    <img src={image} class="d-block w-100 carousel-img" alt="..."/>
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            ))}
        </Carousel>
      </SliderContainer>
  );
}

export default ImageSlider;
