import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ItemContainer = styled.div`
    & .item {
        border: 1px #D6D6D6 solid;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.21); 
        box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.21);
        min-height: 50px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 20px 0px;
        position: relative;
        margin-bottom: 20px;
        position: relative;
        font-family: "Sen", sans-serif;
        overflow: hidden;
        width: 100%;
    }

    .iconsContainer .check-icon {
        display: block;
        opacity: 0;
        transition:  opacity 0.2s ease;
    }

    &:hover {
        .iconsContainer .check-icon {
            opacity: 1;
        }
    }
`

const CompletedItem = styled.div`
    text-decoration: line-through;
    color: #838383;
`

const TodoItem = styled.div`
    
`

const ItemTitle = styled.h1`
    font-weight: 600;
    font-size: 1.2rem;
    margin: 0px;
    text-align: left;
    /* max-width: 60%; */
`

const Checkbox = styled.input`
    zoom: 1.8;
    margin: 2px 10px;
    cursor: pointer;
    accent-color: #081736;
`

const IconsContainer = styled.div`
    /* background-color: tomato; */
    height: 100%;
    color: #081736;
    font-size: 1.2rem;
    min-width: 60px;
    height: 100%;
    width: 130px;
    position: absolute;
    right: 10px;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    & .check-icon {
        margin: 0px 5px;
    }

    &:hover {
        cursor: pointer;
    }
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 140px;
`

const AssignedImg = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 100px;
`

const PopupContent = styled.div`
    padding: 10px;
`

const PopupTitle = styled.h6`
    font-family: "Sen", sans-serif;
    font-weight: 600;
`

const SelectMembers = styled.select`
    width: 90%;
`


function ChecklistItem(props) {
    const [thisItem, setThisItem] = useState(props.item)
    const [ members, setMembers ] = useState(props.members)
    
    console.log(thisItem)

    return (
        thisItem.status === 'to-do'
        ?
            <ItemContainer>
                <TodoItem className="item">
                    <TitleContainer>
                        <Checkbox type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <ItemTitle>{thisItem.title}</ItemTitle>
                    </TitleContainer>
                    <IconsContainer className='iconsContainer'>
                        <FontAwesomeIcon className='check-icon' icon={faPenToSquare}/>
                        <FontAwesomeIcon className='check-icon' icon={faTrash}/>
                        { !thisItem.assigned ? 
                            <Popup
                                trigger={open => (
                                    <FontAwesomeIcon className='check-icon' icon={faUserPlus}/>
                                )}
                                position="left center"
                                closeOnDocumentClick
                            >
                                <PopupContent>
                                    <PopupTitle>Assign to someone</PopupTitle>
                                    <SelectMembers name="members" id="members" >
                                        {members.map((member, index) => (
                                            <option key={index} value={member.username}>{member.username}</option>
                                        ))}
                                    </SelectMembers>
                                </PopupContent>
                            </Popup>
                            :
                            <Popup
                                trigger={open => (
                                    <AssignedImg className='assigned-img' src={thisItem.assigned.img} />
                                )}
                                position="left center"
                                closeOnDocumentClick
                            >
                                <PopupContent>
                                    <PopupTitle>Assign to someone</PopupTitle>
                                    <SelectMembers name="members" id="members" >
                                        <option value={null}>----</option>
                                        {members.map((member, index) => (
                                             <option key={index} value={member.username}>{member.username}</option>
                                        ))}
                                    </SelectMembers>
                                </PopupContent>
                          </Popup>
                        }
                    </IconsContainer>
                </TodoItem>
            </ItemContainer>
        :
            <ItemContainer>
                <CompletedItem className="item">
                    <TitleContainer>
                        <Checkbox checked type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <ItemTitle>{thisItem.title}</ItemTitle>
                    </TitleContainer>
                    <IconsContainer className='iconsContainer'>
                        <FontAwesomeIcon className='check-icon' icon={faPenToSquare}/>
                        <FontAwesomeIcon className='check-icon' icon={faTrash}/>
                        { !thisItem.assigned ? 
                            <FontAwesomeIcon className='check-icon' icon={faUserPlus}/>
                            :
                            <Popup
                                trigger={open => (
                                    <AssignedImg className='assigned-img' src={thisItem.assigned.img} />
                                )}
                                position="left center"
                                closeOnDocumentClick
                            >
                                <PopupContent>
                                    <PopupTitle>Assign to someone</PopupTitle>
                                    <SelectMembers name="members" id="members" >
                                        <option value={null}>----</option>
                                        {members.map((member, index) => (
                                             <option key={index} value={member.username}>{member.username}</option>
                                        ))}
                                    </SelectMembers>
                                </PopupContent>
                          </Popup>
                            
                        }
                    </IconsContainer>
                </CompletedItem>
            </ItemContainer>
        
    );
}

export default ChecklistItem;
