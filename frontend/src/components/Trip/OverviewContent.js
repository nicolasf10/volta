import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faNoteSticky, faLink, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import BlocksArea from './BlocksArea';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';


const ContentContainer = styled.div`
    width: 100vw;
    background: #fff;
    padding: 20px;

    @media screen and (max-width: 1001px) {
        width: 100vw;
    }
`

const OverviewTitle = styled.h4`
    font-family: "Lora", sans-serif;
    font-weight: 600;
`

const AddBlockButton = styled.button`
    background-color: #1746A2;
    color: #fff;
    border: none;
    border-radius: 100px;
    padding: 5px 10px;
    font-family: "Sen", sans-serif;
`

const OverviewHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

const BlocksOption = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
`

const BlockOption = styled.li`

`

const BlockButton = styled.button`
    border: none;
    width: 100%;
    text-align: center;
    padding: 10px 5px;
    background: none;
    font-family: "Sen", sans-serif;

    &:hover {
        background: #EEEEEE;
    }
`


function OverviewContent(props) {
    const [trip, setTrip] = useState(props.trip);

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
    }, [props.trip])

    const popupStyle = {borderRadius:'10px', width: "255px", height: "auto", padding: "0px"};

    async function handleAdd(block) {
        console.log('Adding block')
        const tripRef = doc(db, "trips", props.id);
        // const docSnap = await getDoc(tripRef);
        // const currentTrip = docSnap.data();

        var newBlock;

        if (block === 'note') {
            newBlock = {
                type: 'note',
                title: "Notes",
                content: "",
                created: `${Math.random()}`
            }
        } else if (block === 'resources') {
            newBlock = {
                type: 'links',
                title: "Resources",
                content: [],
                created: `${Math.random()}`
              }
        } else if (block === 'budget') {
            newBlock = {
                type: 'budget',
                title: "Budget",
                content: {
                    'Accomodation': 0,
                    'Travel': 0,
                    'Entertainment': 0,
                    'Food': 0,
                    'Shopping': 0,
                    'Transportation': 0,
                    'Other': 0,
                },
                limit: 1000,
                created: `${Math.random()}`
            }
        }

        console.log(newBlock)

        updateDoc(tripRef, {
            blocks: arrayUnion(newBlock)
        }).then(async () => {
            console.log('Block added')
            const tripRefGet = doc(db, "trips", props.id);
            const docSnap = await getDoc(tripRefGet);
            const currentTrip = docSnap.data();
            // props.saveTrip(newBlock);
            var newTrip = {
                ...trip,
                blocks: [...currentTrip.blocks, newBlock]
            }
            // setTrip(newTrip);
            setTrip({ ...trip, blocks: [...trip.blocks, newBlock]})
        }).catch((error) => console.log(error.message))
    }

    const updateTrip = useCallback((newTrip) => {
        setTrip(newTrip)
    })

    return (
        <ContentContainer>
            <OverviewHead>
                <OverviewTitle>Hey, welcome to your {trip.title} trip</OverviewTitle>
                <Popup
                    trigger={<AddBlockButton><FontAwesomeIcon icon={faPlus}/> Add Block</AddBlockButton>}
                    position="left center"
                    contentStyle={popupStyle}
                    closeOnDocumentClick
                >
                    <BlocksOption>
                        <BlockOption><BlockButton style={{borderRadius: '10px 10px 0px 0px'}} onClick={() => handleAdd('note')}><FontAwesomeIcon icon={faNoteSticky} /> Notes</BlockButton></BlockOption>
                        <BlockOption><BlockButton onClick={() => handleAdd('resources')}><FontAwesomeIcon icon={faLink} /> Resources</BlockButton></BlockOption>
                        <BlockOption><BlockButton style={{borderRadius: '0px 0px 10px 10px'}} onClick={() => handleAdd('budget')}><FontAwesomeIcon icon={faDollarSign} /> Budget</BlockButton></BlockOption>
                    </BlocksOption>
                </Popup>
            </OverviewHead>
            <BlocksArea updateTrip={updateTrip} id={props.id} trip={trip}/>
        </ContentContainer>
    );
}

export default OverviewContent;
