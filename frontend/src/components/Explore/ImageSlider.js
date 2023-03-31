import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';


const SliderContainer = styled.div`
  border-radius: 15px 0px 0px 15px;
  position: relative;
  width: 300px;
  height: 300px;

  @media screen and (max-width: 800px) {
    border-radius: 15px 15px 0px 0px;
    width: 100%;
  }
`

const SliderImage = styled.img`
  height: 300px;
  border-radius: 15px 0px 0px 15px;

  @media screen and (max-width: 800px) {
    border-radius: 15px 15px 0px 0px;
  }
`

const CarouselItem = styled(Carousel.Item)`
  height: 300px;
`

const IconsContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #fff;
  border-radius: 10px;
  z-index: 2000;
  color: #081736;
  padding: 5px;
  font-size: 1.3em;
  cursor: pointer;
`

function ImageSlider(props) {
  return (
      <SliderContainer>
        <IconsContainer>
          <FontAwesomeIcon icon={faPlaneDeparture} />
        </IconsContainer>
        <Carousel fade style={{height: "100%"}} interval={null}>
            {props.images.map((image) => (
                <CarouselItem>
                    <SliderImage src={image} className="d-block w-100 h-100 carousel-img" alt="..."/>
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </CarouselItem>
            ))}
        </Carousel>
      </SliderContainer>
  );
}

export default ImageSlider;
