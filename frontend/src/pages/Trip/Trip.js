import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom'
import TripBanner from '../../components/TripBanner';
import TripOverview from '../../components/Trip/TripOverview';
import TripPlans from '../../components/Trip/TripPlans';
import TripChecklist from '../../components/Trip/TripChecklist';


const TripPage = styled.div`

`

const NavList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: middle;
    height: 50px;
    background-color: #EEE;
    border-top: 2.5px #000 solid;
    padding-left: 0px;
`

const NavItem = styled.li`
    line-height: 50px;
    padding: 0px 15px;
    font-family: "Sen", sans-serif;
    font-weight: 700;
    cursor: pointer;
`


function Trip() {
    const location = useLocation();
    const navigate = useNavigate();
    const [trip, setTrip] = useState(null);
    const [page, setPage] = useState("overview");
    const [pages, setPages] = useState({
        'overview' : <TripOverview trip={trip}/>,
        'plans' : <TripPlans trip={trip}/>,
        'checklist' : <TripChecklist trip={trip}/>
    });

    useEffect(() => {
        if (!location.state) {
            console.log("rerouting");
            navigate("/");
        } else {
            setTrip(location.state.trip);
        }
        
    }, []);


    function pageClick(e) {
        let pages = ['overview', 'plans', 'checklist']
        for (let i = 0; i < pages.length; i++) {
            document.getElementById(pages[i]).classList.remove("active-underline")
        }

        document.getElementById(e.target.id).classList.add("active-underline");
        setPage(e.target.id);
    }

    return (
        trip != null ?
        <TripPage>
            <TripBanner trip={trip}/>
            <NavList>
                <NavItem onClick={pageClick} className='active-underline' id="overview">Overview</NavItem>
                <NavItem onClick={pageClick} id="plans" >Plans</NavItem>
                <NavItem onClick={pageClick} id="checklist">Checklist</NavItem>
            </NavList>
            {pages[page]}
        </TripPage>
        : 
        <></>
    );
}

export default Trip;
