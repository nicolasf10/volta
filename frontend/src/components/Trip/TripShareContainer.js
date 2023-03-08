import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';


const ShareContainer = styled.div`
    margin-top: 10px;
    margin-right: 20px;
    float: right;
    display: flex;
`

const Modal = styled.div`
    width: 600px;
    height: 500px;
    background-color: #F1F1F1;
    border-radius: 10px;
    padding: 20px;
    position: relative;

    @media (max-width: 550px) {
        width: 85vw;
    }
`

const ModalTitle = styled.h3`
    color: #000;
    font-family: "Lora", sans-serif;
`

const WindowBox = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200, .3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    justify-content: center;
    align-items: center;
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


    &:hover {
        background-color: #fff;
        border-radius: 100%;
    }
`

const BackIcon = styled.i`

`

const ShareForm = styled.div`
    margin-top: 20px;
`

const ShareInput = styled.input`
    border: 1px #cfcfcf solid;
    border-radius: 3.5px;
    background: #F1F1F1;
    height: 35px;
    font-family: "Sen", sans-serif;
    padding-left: 10px;
    width: calc(70% - 20px);

    &:focus {
        outline: 1.5px #1746A2 solid !important;
        border-color: #1746A2;
        /* box-shadow: 0 0 10px #1746A2; */
    }

    @media (max-width: 550px) {
        width: calc(85vw - 40px);
    }
`

const ShareSend = styled.button`
    background-color: #1746A2;
    border-radius: 3.5px;
    height: 35px;
    width: calc(30%);
    font-family: "Sen", sans-serif;
    border: none;
    color: #F1F1F1;
    margin-left: 10px;

    @media (max-width: 550px) {
        margin-top: 10px;
        margin-left: 0px;
        width: calc(85vw - 40px);
    }
`

const MembersTitle = styled.h5`
    font-family: "Lora", sans-serif;
    margin-top: 20px;
`

const MembersContainer = styled.div`
    margin-top: 10px;
    border: 1px #cfcfcf solid;
    border-radius: 10px;
    height: 250px;
    overflow: scroll;
    padding: 0px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Member = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 50px;
    margin: 10px;
    transition: 0.1s all ease-in;
    border-radius: 100px 20px 20px 100px;

    &:hover {
        background-color: #fff;

        .deleteContainer {
            display: flex;
        }
    }
`

const MemberImg = styled.img`
    width: 40px;
    height: 40px;
    margin: 5px;
    border-radius: 100px;
    display: block;
`

const MemberEmail = styled.p`
    display: block;
    height: 100%;
    line-height: 50px;
    margin-left: 10px;
    font-family: "Sen", sans-serif;
`

const Quote = styled.p`
    font-family: "Sen", sans-serif;
    font-size: 1.05em;
    position: absolute;
    bottom: 0px;
    text-align: center;
    font-style: italic;
`

const DeleteContainer = styled.div`
    color: #081736;
    position: absolute;
    justify-content: center;
    align-items: center;
    right: 10px;
    top: 0px;
    height: 100%;
    display: none;
`


function TripShareContainer(props) {
    const [members, setMembers] = useState(props.members);
    const [ newMembers, setNewMembers ] = useState([]);
    const [ show, setShow ] = useState('none');

    const wrapperSetShow = useCallback(val => {
        setShow(val);
    }, [setShow]);

    return (
        <ShareContainer>
            <OverlayTrigger
                delay={{ hide: 100, show: 100 }}
                overlay={(props) => (
                <Tooltip {...props}>
                    {members.length == 1 ? "Start collaborating!" : <>{"Shared with " + (members.length-1) + " other" + (members.length > 2 ? "s" : "")}</>}
                </Tooltip>
                )}
                placement="bottom">
                <Button onClick={() => setShow('flex')} variant="dark">Share</Button>
            </OverlayTrigger>
            <WindowBox style={{display: show}}>
                <Modal>
                    <BackContainer onClick={() => setShow('none')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </BackContainer>
                    <ModalTitle>🔗 Share your trip</ModalTitle>
                    <ShareForm>
                        <ShareInput placeholder='Add collaborators (Volta users)' type="email"/>
                        <ShareSend type="submit">Send</ShareSend>
                    </ShareForm>
                    <MembersTitle>People with access</MembersTitle>
                    <MembersContainer>
                        {members.map((member, index) => (
                            <Member key={index}>
                                <MemberImg src={member.img} />
                                <MemberEmail>{member.username}</MemberEmail>
                                <DeleteContainer className='deleteContainer'>
                                    <FontAwesomeIcon icon={faTrash} />
                                </DeleteContainer>
                            </Member>
                        ))}
                    </MembersContainer>
                    <Quote>“A journey is best measured in friends, rather than miles.” – Tim Cahill</Quote>
                </Modal>
            </WindowBox>
        </ShareContainer>
    );
}

export default TripShareContainer;
