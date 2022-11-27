import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


const ShareContainer = styled.div`
    margin-top: 10px;
    margin-right: 20px;
    float: right;
    display: flex;
`

// const Avatars = styled.div`
//     margin-right: 20px;
// `

// const Avatar = styled.div`
//     display: inline-block;
//     border-radius: 50%;
//     overflow: hidden;
//     width: 30px;
//     height: 30px;

//     &:not(::first-child) {
//         margin-left: -60px;
//         -webkit-mask:radial-gradient(circle 55px at 5px 50%,transparent 99%,#fff 100%);
//         mask:radial-gradient(circle 55px at 5px 50%,transparent 99%,#fff 100%);
//     }
// `

// const AvatarImg = styled.img`
//     width: 100%;
//     display: block;
// `

function TripShareContainer(props) {
    const [members, setMembers] = useState(props.members);
    console.log(props);

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    // const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    return (
        <ShareContainer>
            {/* <Avatars>
                {members != null ? members.map((member) => (
                    <Avatar class="avatar">
                        <AvatarImg src={member.img} alt={member.username} />
                    </Avatar>
                )) : <></>}
            </Avatars> */}
            <OverlayTrigger
                delay={{ hide: 100, show: 100 }}
                overlay={(props) => (
                <Tooltip {...props}>
                    {members.length == 1 ? "Start collaborating!" : <>{"Shared with " + (members.length-1) + " other" + (members.length > 2 ? "s" : "")}</>}
                </Tooltip>
                )}
                placement="bottom">
                <Button variant="dark">Share</Button>
            </OverlayTrigger>
        </ShareContainer>
    );
}

export default TripShareContainer;
