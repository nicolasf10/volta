import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import logo from './../images/logo1.svg';
import styled from 'styled-components';
import { Nav, Navbar, Button } from "react-bootstrap";
import './Navbar.css';

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

    const LogoImg = styled.img`
        height: 42.5px;
        margin: 10px;
        text-align: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
    `
 
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
                        <Button className='nav-item log-button btn btn-primary' type="button">Log Out</Button>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavbarComponent;