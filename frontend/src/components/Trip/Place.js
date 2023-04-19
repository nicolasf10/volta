import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PlaceNotes from './PlaceNotes';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faMap, faTrash } from '@fortawesome/free-solid-svg-icons';

const PlaceContainer = styled.div`
    max-width: 100%;
    min-height: 130px;
    background: rgb(255, 255, 255);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.11); 
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.11);
    margin: 20px 10px;
    border-radius: 10px;
    padding: 15px 10px 15px 15px;
    position: relative;
`

const PlaceTitle = styled.h4`
    font-family: "Sen", sans-serif;
    font-weight: 600;
`

const PlaceDescription = styled.p`

`

const PlaceAddress = styled.p`
    font-family: "Sen", sans-serif;
    font-style: italic;
    font-weight: 500;
`

const PlaceIcons = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.25em;
    background-color: #fff;
    border-radius: 10px;
    padding: 6.5px;
    z-index: 101;

    & * {
        cursor: pointer;
        margin: 4px;
        color: rgb(47, 47, 47) !important;
    }

    & a {
        color: rgb(47, 47, 47) !important;
    }
`

const PlaceContent = styled.div`
    margin-left: 160px;

    @media screen and (max-width: 600px) {
        margin-left: 0px;
        margin-top: 130px;
    }
`

const PlaceImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 160px;
    border-radius: 10px 0px 0px 10px;
    object-fit: cover;

    @media screen and (max-width: 600px) {
        width: 100%;
        height: 130px;
        border-radius: 10px 10px 0px 0px;
    }
`

const PaddingRight = styled.div`
    padding-right: 75px;
`

const SavePlace = styled.button`
    background: none;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
`

const DeleteButton = styled.button`
    background: none;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
`


function Place(props) {
    const [ item, setItem ] = useState(props.item);

    useEffect(() => {
        // console.log(item)
        setItem(props.item);
    }, [])

    async function savePlace (e) {
        console.log(item.position.lat)
        const newItem = {
            title: item.title,
            link: item.link,
            img: item.img,
            address: item.address,
            position: {lat: item.position.lat.toString(), lng: item.position.lng.toString()},
        }

        const tripRef = doc(db, "trips", props.id);

        // Get the current trip data from Firestore
        const tripData = (await getDoc(tripRef)).data();

        // console.log(props.list)
        var list = props.list
        // console.log(list)

        // Make sure the list object was found before continuing
        if (list) {
            // Find the index of the list object in the `lists` array
            const listIndex = tripData.lists.findIndex(obj => obj.title === props.list.title);

            // check if item is already in list
            var alreadyExists = false;
            console.log(tripData.lists[listIndex].items)
            for (let i = 0; i < tripData.lists[listIndex].items.length; i++) {
                console.log(tripData.lists[listIndex].items[i])
                console.log(item.title)
                if (tripData.lists[listIndex].items[i].title === item.title) {
                    alreadyExists = true;
                    break
                }
            }

            if (!alreadyExists) {
                props.updateList({
                    title: item.title,
                    link: item.link,
                    img: item.img,
                    address: item.address,
                    position: {lat: item.position.lat.toString(), lng: item.position.lng.toString()},
                })
    
                
                // Create a new array of list objects with the updated items array
                const updatedLists = [
                    ...tripData.lists.slice(0, listIndex),
                    {
                    ...list,
                    items: [...tripData.lists[listIndex].items, newItem]
                    },
                    ...tripData.lists.slice(listIndex + 1)
                ];
                console.log(listIndex);
    
                // Update the Firestore document with the new list data
    
                await updateDoc(tripRef, { lists: updatedLists });
            } else {
                alert('Item already added');
            }

        } else {
            console.error(`List with title "${props.list.title}" not found.`);
        }
    }
    
    async function deletePlace(e) {
        const tripRef = doc(db, "trips", props.id);

        // Get the current trip data from Firestore
        const tripData = (await getDoc(tripRef)).data();

        // console.log(props.list)
        var list = props.list
        // console.log(list)

        // Make sure the list object was found before continuing
        if (list) {
            // Find the index of the list object in the `lists` array
            const listIndex = tripData.lists.findIndex(obj => obj.title === props.list.title);

            // Go over the items in the list and delete when i.title === item.title
            var oldItems = tripData.lists[listIndex].items;
            var newItems = [];

            for (let i = 0; i < oldItems.length; i++) {
                if (oldItems[i].title !== item.title) {
                    newItems.push(oldItems[i])
                }
            }

            
            // Calling prop function to sync state
            props.deletePlace(newItems)

            // Create a new array of list objects with the updated items array
            const updatedLists = [
                ...tripData.lists.slice(0, listIndex),
                {
                ...list,
                items: [...newItems]
                },
                ...tripData.lists.slice(listIndex + 1)
            ];
    
            // Update the Firestore document with the new list data
    
            await updateDoc(tripRef, { lists: updatedLists });

        } else {
            console.error(`List with title "${props.list.title}" not found.`);
        }
    }

    return (
        <>
            { props.new ?
                <>
                    {item.img ?
                        <PlaceContainer>
                            <PlaceIcons>
                                <a href={item.link} target="a_blank">
                                    <FontAwesomeIcon icon={faMap} />
                                </a>
                                <SavePlace onClick={savePlace}>
                                    <FontAwesomeIcon icon={faBookmark}/>
                                </SavePlace>
                            </PlaceIcons>
                            <PlaceContent>
                                <PaddingRight>
                                    <PlaceTitle>{item.title}</PlaceTitle>
                                    <PlaceAddress>{item.address}</PlaceAddress>
                                </PaddingRight>
                            </PlaceContent>
                            <PlaceImg src={item.img} />
                        </PlaceContainer>
                    :
                        <PlaceContainer>
                            <PlaceIcons>
                                <a href={item.link} target="a_blank">
                                    <FontAwesomeIcon icon={faMap} />
                                </a>
                                <SavePlace onClick={savePlace}>
                                    <FontAwesomeIcon icon={faBookmark}/>
                                </SavePlace>
                            </PlaceIcons>
                            <PaddingRight>
                                <PlaceTitle>{item.title}</PlaceTitle>
                                <PlaceAddress>{item.address}</PlaceAddress>
                            </PaddingRight>
                        </PlaceContainer>
                    }
                </>
            :
                <>
                    {item.img ?
                        <PlaceContainer>
                            <PlaceIcons>
                                <a href={item.link} target="a_blank">
                                    <FontAwesomeIcon icon={faMap} />
                                </a>
                                <DeleteButton onClick={deletePlace}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </DeleteButton>
                            </PlaceIcons>
                            <PlaceContent>
                                <PaddingRight>
                                    <PlaceTitle>{item.title}</PlaceTitle>
                                    <PlaceAddress>{item.address}</PlaceAddress>
                                </PaddingRight>
                                {/* <PlaceNotes item={item}/> */}
                            </PlaceContent>
                            <PlaceImg src={item.img} />
                        </PlaceContainer>  
                    :
                        <PlaceContainer>
                            <PlaceIcons>
                                <a href={item.link} target="a_blank">
                                    <FontAwesomeIcon icon={faMap} />
                                </a>
                                <DeleteButton onClick={deletePlace}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </DeleteButton>
                            </PlaceIcons>
                            <PaddingRight>
                                <PlaceTitle>{item.title}</PlaceTitle>
                                <PlaceAddress>{item.address}</PlaceAddress>
                            </PaddingRight>
                            {/* <PlaceNotes item={item}/> */}
                        </PlaceContainer> 
                    }
                </>
            }
        </>
    );
}

export default Place;
