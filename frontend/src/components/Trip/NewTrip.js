import React, { useState, useEffect, useCallback, useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DetailsContent from './DetailsContent';
import Popup from 'reactjs-popup';
import EmojiPicker from 'emoji-picker-react';
import EmojiImg from '../EmojiImg';
import ListImageSearch from './ListImageSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCalendar } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import getAirports from '../../services/GetAirports';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { AuthContext } from '../../Auth';
import { db } from '../../firebase';


const NewTripButton = styled.button`
    float: right;
    font-size: 1.1rem;
    border-radius: 7px;
    padding: 7.5px 15px;
    height: 40px;
    font-family: "Sen", sans-serif;
    color: #fff;
    border: none;
    background-color: #1746A2;
    transition: all 0.2s ease;
    outline: 1px solid var(--darkBlue);

    &:hover {
        background-color: transparent;
        color: var(--darkBlue);
    }

    &:focus {
        background-color: transparent ;
        color: var(--darkBlue);
        border: 1px solid var(--darkBlue);
    }
`

const NewListContainer = styled.div`
    width: 300px;
    height: 400px;
    border: 1px #D6D6D6 solid;
    border-radius: 10px;
    color: #838383;
    position: relative;
    margin: 15px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #E8E8E8;
        cursor: pointer;
    }
`

const NewTitle = styled.h1`
    font-size: 1.4em;
    font-family: "Sen", sans-serif;
    text-align: center;
    font-weight: 600;
`

const NewIcon = styled.i`
    font-size: 1.5em;
    margin-bottom: 20px;
`

const TripForm = styled.form`
    padding: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* background-color: aliceblue; */
`

const FormTitle = styled.h3`
    margin-left: 10px;
    font-family: "Lora", sans-serif;
    font-weight: 600;
`

const FormMainInputs = styled.div`
    display: flex;
    align-items: center;
`

const TripName = styled.input`
    margin-right: 20px;
    margin-left: 10px;
    border: none;
    height: 35px;
    width: 300px;
    color: #242424;
    font-family: "Sen", sans-serif;
    font-size: 1.3em;
    border-bottom: 2px solid rgb(200, 200, 200, 0.8);
    transition: all ease-in 0.2s;

    &::placeholder {
        color: rgb(200, 200, 200, 0.8);
        font-family: "Sen", sans-serif;
        /* border-bottom: 3px solid red; */
        /* font-size: 2em; */
    }
    
    &:focus {
        outline: none;
        border-bottom: 2px solid #1746A2;
    }

    @media (max-width: 450px) {
        width: 190px;
    }
`

const FormSubmit = styled.button`
    background-color: #1746A2;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin-top: auto;
    padding: 5px 10px;
    font-family: "Sen", sans-serif;
`

const EmojiContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    transition: 0.15s ease;
    border-radius: 10px;
    cursor: pointer;
    font-size: 2.5em;

    & span {
        line-height: 50px;
    }

    &:hover {
        background-color: rgba(200, 200, 200, 0.5);
    }
`

const ImageSearchBox = styled.div`
    margin-top: 10px;
`

const SearchInput = styled.input`

`

const SearchImageButton = styled.button`

`

const BackContainer = styled.div`
    margin: 10px;
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
    font-family : "Sen", "sans-serif";
    background-color: #F1F1F1;
    z-index: 4;
    width: 40px;
    height: 40px;
    padding: 5px 10px;
    transition: 0.25s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;


    &:hover {
        background-color: #F1F1F1;
        border-radius: 100%;
    }
`

const CalendarContainer = styled.div`
    font-size: 1.4em;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
`


var emojis = [
    '🗺️', '🇧🇧', '🇦🇺', '🇿🇼', '🇵🇭', '🇯🇵', '🇧🇷', '🇳🇴', '🇩🇪', '🇵🇹', '🇬🇧', '🇺🇸'
];


function NewTrip(props) {
    const [ list, setTrip ] = useState(props.trip);
    const [ show, setShow ] = useState('none');
    const [ tripPlace, setTripPlace ] = useState('');
    const [ countryCode, setCountryCode ] = useState('')
    const [ emoji, setEmoji ] = useState(emojis[Math.floor(Math.random() * emojis.length)]);
    const [ img, setImg ] = useState('');
    const { currentUser } = useContext(AuthContext);


    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
    }, [])

    const onSubmit = (closing) => {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${tripPlace}&key=AIzaSyBwLSV_KJEYZpoIn6DxFWN5rAowGsCKC9U`;
        fetch(url).then((response) => {
            const data = response.json().then(
                (data) => {
                    var place_code = "";
                    console.log(data)
                    if (data.results.length > 0) {
                        const country = data.results[0].address_components.filter(
                        (component) => component.types.indexOf('country') !== -1
                        )[0].short_name;
                        console.log(country);
                        setCountryCode(country);
                        place_code = country;
                    } else {
                        console.log('No country found');
                        setCountryCode('');
                    }

                    // Adding to firebase
                    if (tripPlace === '' || img === '') {
                        alert("Plase fill out all fields");
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
                                emoji: emoji,
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
                                users: [currentUser.uid]
                            }
                        ).then(() => {
                            console.log('Added trip')
                            setTripPlace('');
                            closing();
                            props.updateTrips();
                        })
                    }
                }
            );
            
        });
    }

    const contentStyle = {borderRadius:'10px', width: '700px', height: '500px', maxWidth: '90%'};

    const contentStyleCalendar = {borderRadius:'10px', width: "255px", height: "255px"};

    const contentStyleEmoji = {borderRadius:'10px', width: "363px", height: "447.5px"};

    const changeImg = useCallback((item) => {
        console.log(item)
        setImg(item)
    }, []);


    return (
        <Popup contentStyle={contentStyle} className='popup form-modal' nested trigger={
            <NewTripButton>
                New Trip
            </NewTripButton>
        } modal>
            {close => (
                <TripForm onSubmit={(event) => event.preventDefault()}>
                    <FormTitle>New trip</FormTitle>
                    <BackContainer onClick={close}>
                        <FontAwesomeIcon icon={faXmark} />
                    </BackContainer>
                    <FormMainInputs>
                        <TripName onChange={(e) => setTripPlace(e.target.value)} value={tripPlace} placeholder="Trip place (country or city)" type='text'/>
                        <Popup
                            trigger={open => (
                                <CalendarContainer>
                                    <FontAwesomeIcon icon={faCalendar} />
                                </CalendarContainer>
                            )}
                            nested
                            position="bottom center"
                            contentStyle={contentStyleCalendar} 
                            closeOnDocumentClick
                        >
                            <DatePicker
                                // selected={startDate}
                                // onChange={onChange}
                                // startDate={startDate}
                                // endDate={endDate}
                                selectsRange
                                inline
                                // onSelect={onSelect}
                            />
                        </Popup>
                        
                        <Popup
                            trigger={open => (
                                <EmojiContainer><EmojiImg size="40px" emoji={emoji}/></EmojiContainer>
                                // <button className="button">{emoji}</button>
                            )}
                            position="bottom center"
                            nested
                            contentStyle={contentStyleEmoji} 
                        >
                            <div>
                                <Picker data={data} onEmojiSelect={(emoji) => setEmoji(emoji.native)} />
                            </div>
                        </Popup>
                    </FormMainInputs>
                    <ListImageSearch parentCallback={changeImg} />
                    <FormSubmit onClick={() => onSubmit(close)}>Save</FormSubmit>
                </TripForm>
            )}
        </Popup>
    );
}

export default NewTrip;
