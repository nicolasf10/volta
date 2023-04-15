import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../images/logo1.svg';
import styled from 'styled-components';
import { Nav, Navbar, Button } from "react-bootstrap";
import './Navbar.css';
import { logout } from '../firebase';
import { AuthContext } from '../Auth';

const LogButton = styled.button`
    font-size: 1.1rem;
    border-radius: 7px;
    padding: 7.5px 15px;
    height: 40px;
    font-family: "Sen", sans-serif;
    color: #fff;
    background-color: #1746A2;
    transition: all 0.2s ease;
    margin-right: 25px;
    border: 1px solid rgba(0,0,0,0);

    @media screen and (max-width: 991px) {
        margin-right: 0px;
    }

    &:hover {
        background-color: transparent;
        color: var(--darkBlue);
        border: 1px solid var(--darkBlue);
    }

    &:focus {
        background-color: transparent ;
        color: var(--darkBlue);
        border: 1px solid var(--darkBlue);
    }
`

const LogoImg = styled.img`
        height: 42.5px;
        margin: 10px;
        text-align: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
`

function NavbarComponent(props)
{
    const [menu, setMenu] = useState(
        [
            {
                "title" : "My Trips",
                "link" : "/mytrips"
            },
            {
                "title" : "Explore",
                "link" : "/explore"
            },
            {
                "title" : "Bucket List",
                "link" : "/bucketlist"
            },
            {
                "title" : "Sign out",
                "link" : "/signout"
            }
        ]
    );

    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLog() {
        if (currentUser) {
            navigate('/');
            logout();
        } else {
            navigate('/login');
        }
        
    }
 
    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
            <Navbar.Brand href="">
                <Link to="/">
                    <LogoImg src={logo}/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle className='nav-toggle' aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto nav-items">
                    <Nav.Link className={props.active == "my-trips" ? "nav-link active nav-item" : "nav-link nav-item"}><Link className='nav-link-style no-underline' to="/trips">My Trips</Link></Nav.Link>
                    {/* <Nav.Link className={props.active == "bucket-list" ? "nav-link active nav-item" : "nav-link nav-item"}><Link className='nav-link-style no-underline' to="/bucketlist">Bucket List</Link></Nav.Link> */}
                    <Nav.Link className={props.active == "explore" ? "nav-link active nav-item" : "nav-link nav-item"}><Link className='nav-link-style no-underline' to="/explore">Explore</Link></Nav.Link>
                    <div className='log-button-container'>
                        <LogButton onClick={handleLog}>{currentUser ? <span>LOG OUT</span> : <span>LOG IN</span>}</LogButton>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavbarComponent;