import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '../../Auth';


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

const CreateTrip = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  outline: none;
`

function ImageSlider(props) {

  const navigate = useNavigate();

  function getCountryFlag(countryCode) {
    const flagOffset = 127397; // Unicode offset for regional indicator symbols
    const alpha2Code = countryCode.toUpperCase(); // Convert to uppercase for consistency
  
    // Check if the country code is valid
    if (/^[A-Z]{2}$/.test(alpha2Code)) {
      // Compute the Unicode code point for the flag
      const codePoint = alpha2Code
        .split('')
        .map(char => char.charCodeAt(0) + flagOffset)
        .map(code => `\\u{${code.toString(16)}}`)
        .join('');
  
      // Replace the code point with the corresponding emoji
      const flagEmoji = codePoint.replace(/\\u\{([0-9a-f]{1,6})\}/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)));
      return flagEmoji;
    }
  
    // If the country code is not valid, return a random emoji
    const randomEmojis = ['✈️', '🎒', '🧭'];
    const randomIndex = Math.floor(Math.random() * randomEmojis.length);
    return randomEmojis[randomIndex];
  }
  
  
  
  
  
  const { currentUser } = useContext(AuthContext);

  const handleClick = () => {
    var tripPlace = props.destination.title;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${tripPlace}&key=AIzaSyBwLSV_KJEYZpoIn6DxFWN5rAowGsCKC9U`;
        fetch(url).then((response) => {
            const data = response.json().then(
                (data) => {
                    var place_code = "";
                    console.log(data)
                    if (data.results.length > 0) {
                        var country;
                        try {
                          country = data.results[0].address_components.filter(
                            (component) => component.types.indexOf('country') !== -1
                            )[0].short_name;
                        } catch {
                          country = "US";
                        }
                       
                        console.log(country);
                        // setCountryCode(country);
                        place_code = country;
                    } else {
                        console.log('No country found');
                        // setCountryCode('');
                    }

                    var img = props.destination.images[0];

                    // Adding to firebase
                    if (tripPlace === '' || img === '') {
                        alert("Please fill out all fields");
                    } else {
                        const tripsCollectionRef = collection(db, 'trips');
                        const today = new Date(); // Get the current date
                        const start = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()); // Add 1 month
                        const end = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate() + 7); // Add 1 month and 1 week

                        addDoc(
                            tripsCollectionRef,
                            {
                                blocks: [],
                                checklist: [],
                                date: {
                                    start: Timestamp.fromDate(start),
                                    end: Timestamp.fromDate(end)
                                },
                                emoji: getCountryFlag(place_code),
                                image: img,
                                lists: [],
                                members: [
                                    {
                                        img: currentUser.photoURL,
                                        uid: currentUser.uid,
                                        username: currentUser.email
                                    }
                                ],
                                place_code: place_code,
                                title: tripPlace,
                                users: [currentUser.uid],
                                owner: currentUser.uid
                            }
                        ).then(() => {
                            console.log('Added trip')
                            navigate('/trips')
                        })
                    }
                }
            );
            
        });
  }

  return (
      <SliderContainer>
        <IconsContainer>
          <CreateTrip onClick={handleClick}><FontAwesomeIcon icon={faPlaneDeparture} /></CreateTrip>
        </IconsContainer>
        <Carousel fade style={{height: "100%"}} interval={null}>
            {props.images.map((image) => (
                <CarouselItem>
                    <SliderImage src={image} className="d-block w-100 h-100 carousel-img" alt="..."/>
                </CarouselItem>
            ))}
        </Carousel>
      </SliderContainer>
  );
}

export default ImageSlider;
