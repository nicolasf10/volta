import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import EmojiImg from '../EmojiImg';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import Popup from 'reactjs-popup';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';


const BannerContainer = styled.div`
    position: relative;
    border-radius: inherit;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    height: 150px;
    border-bottom: 2.5px solid #000;
    box-sizing: border-box;
`

const BannerHeader = styled.div`
    color: #000;
    background-color: #fff;
    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        padding: 10px;
    }

    @media screen and (max-width: 500px) {
        padding: 0px 10px;
    }
`

const BannerTitle = styled.p`
    font-weight: 700;
    font-size: 1.7em;
    font-family: 'Lora', serif;
    text-transform: uppercase;
    margin: 0px;
    display: inline;

    @media screen and (max-width: 600px) {
        font-size: 1.5em;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.3em;
    }
`

const BackgroundImg = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    border-radius: inherit;
    z-index: 1;
`

const IconsContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    z-index: 5;
    font-size: 1.1em;
`

const IconI = styled.i`
    color: #fff;
    cursor: pointer;
    margin-right: 10px;
`

const EmojiContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    transition: 0.15s ease;
    border-radius: 10px;
    margin-left: 10px;
    cursor: pointer;

    &:hover {
        background-color: rgba(100, 100, 100, 0.5);
    }
`

const contentStyleEmoji = {borderRadius:'10px', width: "363px", height: "447.5px"};


function ListBanner(props) {
    const [ trip, setTrip ] = useState(props.trip);
    const [ list, setList ] = useState(props.list);
    const [ emoji, setEmoji ] = useState(props.list.emoji)

    useEffect(() => {
        // console.log(props.list);
        setTrip(props.trip)
        setList(props.list);
    }, [props.list, props.trip])

    async function onEmojiSelect(emoji) {
        setEmoji(emoji.native);
        const tripRef = doc(db, "trips", props.id);

        const listIndex = trip.lists.findIndex(l => l.title === list.title);

        // Update the emoji property of the list at the specified index
        const updatedList = {
        ...trip.lists[listIndex],
            emoji: emoji.native
        };

        // Create a new array with the updated list
        const updatedLists = [
        ...trip.lists.slice(0, listIndex),
        updatedList,
        ...trip.lists.slice(listIndex + 1)
        ];

        // Update the document in Firestore with the new array of lists
        await updateDoc(tripRef, { lists: updatedLists });


        // updateDoc(tripRef, {
            
        // }).then(() => {
        //     console.log("emoji changed")
        // }).catch(error => console.log(error.message));
    }

    
    return (
        <BannerContainer background={list.img}>
            <BackgroundImg src={list.img}/>
            <BannerHeader>
                <BannerTitle>{list.title}</BannerTitle>
                {/* <EmojiContainer> */}
                <Popup
                            trigger={open => (
                                <EmojiContainer>
                                    <EmojiImg size="32px" emoji={emoji} />
                                </EmojiContainer>
                            )}
                            position="bottom center"
                            nested
                            contentStyle={contentStyleEmoji} 
                        >
                            <div>
                                <Picker native={false} data={data} onEmojiSelect={onEmojiSelect} />
                                {/* <EmojiPicker onEmojiClick={(emoji) => setEmoji(emoji.emoji)} /> */}
                            </div>
                    </Popup>
                {/* </EmojiContainer> */}
            </BannerHeader>
            {/* <IconsContainer>
                <IconI className="fa fa-solid fa-image"></IconI>
                <IconI className="fa fa-solid fa-pencil"></IconI>
            </IconsContainer> */}
        </BannerContainer>
    );
}

export default ListBanner;
