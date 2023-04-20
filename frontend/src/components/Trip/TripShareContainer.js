import React, { useState, useEffect, useCallback, useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '../../Auth';
import { useNavigate } from 'react-router-dom';


const ShareContainer = styled.div`
    margin-top: 10px;
    margin-right: 20px;
    float: right;
    display: flex;
`

const Modal = styled.div`
    width: 600px;
    min-height: 500px;
    background-color: #F1F1F1;
    border-radius: 10px;
    padding: 20px;
    position: relative;

    @media (max-width: 650px) {
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
    /* position: absolute;
    bottom: 0px; */
    padding-top: 40px;
    text-align: center;
    font-style: italic;
    margin-bottom: 0px;
    margin-top: auto;

    @media (max-width: 650px) {
        padding-top: 20px;
    }
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

const ShareButton = styled(Button)`
    background: #081736;
    font-family: "Sen", sans-serif;

    &:hover {
        background: #F1F1F1;
        color: #081736;
    }
`


function TripShareContainer(props) {
    const [members, setMembers] = useState(props.members);
    const [ newMember, setNewMember ] = useState('');
    const [ show, setShow ] = useState('none');
    const { currentUser } = useContext(AuthContext);
    const [ trip, setTrip ] = useState(props.trip)

    useEffect(() => {
        setTrip(props.trip)
    }, [props.trip])

    const wrapperSetShow = useCallback(val => {
        setShow(val);
    }, [setShow]);

    const handleShare = (e) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (emailRegex.test(newMember)) {
            const userCollectionRef = query(collection(db, "users"), where("email", "==", newMember));
            getDocs(userCollectionRef).then(response => {
                const userResponse = response.docs.map(doc => ({
                    data: doc.data(),
                }))
                if (userResponse.length > 0) {
                    // check if user already is part of the trip
                    if (props.trip.users.includes(userResponse[0].data.uid)) {
                        alert('User already part of this trip')
                    } else {
                        console.log(userResponse)
                        var newUsers = props.trip.users;
                        newUsers.push(userResponse[0].data.uid);

                        var newMembers = props.trip.members;
                        newMembers.push({
                            img: userResponse[0].data.photoURL,
                            uid: userResponse[0].data.uid,
                            username: userResponse[0].data.email
                        })

                        console.log(newUsers)
                        console.log(newMembers)

                        setMembers(newMembers)

                        const tripRef = doc(db, "trips", props.id);
                        updateDoc(tripRef, {
                            users: newUsers,
                            members: newMembers
                        }).then(() => {
                            setNewMember('');
                            setShow('none');
                        });
                    }
                } else {
                    alert("Please enter the email of a valid Volta user")
                }
            }).catch(error => console.log(error.message));
        } else {
            alert("Please enter a valid email")
        }
    }

    const navigate = useNavigate()

    const handleRemove = (e, uid) => {
        // removing collaborator
        var newUsers = trip.users; // remove user from trip members and all checklist items he's assigned to
        console.log(newUsers)
        var removeID = uid;
        var index = newUsers.findIndex(item => item === removeID);
        if (index > -1) {
            newUsers.splice(index, 1);
            // now removing from the members array
            var newMembers = trip.members;
            newMembers = newMembers.filter(member => member.uid !== removeID);
            console.log(newMembers)
            // now removing all checklist todos
            var newChecklist = trip.checklist;
            for (let i = 0; i < newChecklist.length; i++) {
                if (newChecklist[i].isAssigned && newChecklist[i].assigned.username === removeID) {
                    newChecklist[i].isAssigned = false;
                    newChecklist[i].assigned = null;
                }
            }

            const tripRef = doc(db, "trips", props.id);
            updateDoc(tripRef, {
                users: newUsers,
                members: newMembers,
                checklist: newChecklist
            }).then(() => {
                setShow('none');
                setTrip({...trip, members: newMembers, checklist: newChecklist, users: newUsers});
                setMembers(newMembers)
            }).catch(error => console.log(error.message));
        } else {
            console.log('user not found')
        }
    }

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
                <ShareButton onClick={() => setShow('flex')} variant="dark">Share</ShareButton>
            </OverlayTrigger>
            {
                show ? 
                    <WindowBox style={{display: show}}>
                        <Modal>
                            <BackContainer onClick={() => setShow('none')}>
                                <FontAwesomeIcon icon={faXmark} />
                            </BackContainer>
                            <ModalTitle>🔗 Share your trip</ModalTitle>
                            <ShareForm>
                                <ShareInput onChange={(e) => setNewMember(e.target.value)} value={newMember} placeholder='Add collaborators (Volta users)' type="email"/>
                                <ShareSend onClick={handleShare} type="submit">Send</ShareSend>
                            </ShareForm>
                            <MembersTitle>People with access</MembersTitle>
                            <MembersContainer>
                                {members.map((member, index) => (
                                    <Member key={index}>
                                        <MemberImg src={member.img} />
                                        <MemberEmail>{member.username}</MemberEmail>
                                        {
                                            (currentUser.uid === member.uid || currentUser.uid !== trip.owner) ? <></> :
                                            <DeleteContainer className='deleteContainer'>
                                                <FontAwesomeIcon style={{cursor: 'pointer'}} onClick={(e) => handleRemove(e, member.uid)} icon={faTrash} />
                                            </DeleteContainer>
                                        }
                                    </Member>
                                ))}
                            </MembersContainer>
                            <Quote>“A journey is best measured in friends, rather than miles.” – Tim Cahill</Quote>
                        </Modal>
                    </WindowBox>
                :
                <></>
            }
        </ShareContainer>
    );
}

export default TripShareContainer;
