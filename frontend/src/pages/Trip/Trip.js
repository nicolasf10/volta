import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom'
import TripBanner from '../../components/Trip/TripBanner';
import TripOverview from '../../components/Trip/TripOverview';
import TripLists from '../../components/Trip/TripLists';
import TripChecklist from '../../components/Trip/TripChecklist';
import TripBudget from '../../components/Trip/TripBudget';
import TripFlights from '../../components/Trip/TripFlights';
import TripActivities from '../../components/Trip/TripActivities';


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
    margin: 0px;
`

const NavItem = styled.li`
    line-height: 50px;
    padding: 0px 15px;
    font-family: "Sen", sans-serif;
    font-weight: 700;
    cursor: pointer;

    @media (max-width: 480px) {
        font-size: 0.9em;
        font-weight: 600;
        padding: 0px 7.5px;
    }

    @media (max-width: 350px) {
        font-size: 0.8em;
    }
`


function Trip(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [ status, setStatus ] = useState("loading")
    const [trip, setTrip] = useState(null);
    const [page, setPage] = useState("overview");
    const [currentPage, setCurrentPage] = useState(<>not updated</>)

    useEffect(() => {
        if (!location.state || !location.state.trip || !location.state.trip.date) {
            console.log("rerouting");
            navigate("/trips");
        } else {
            setTrip(location.state.trip);
            document.title = `Trip to ${location.state.trip.title}`
        }

        if (page === "overview") {
            setCurrentPage(<TripOverview key={status} trip={location.state.trip}/>);
        } else if (page === "lists") {
            setCurrentPage(<TripLists key={status} trip={trip}/>);
        } else if (page === "budget") {
            setCurrentPage(<TripBudget key={status} trip={trip}/>);
        } else if (page === "flights") {
            setCurrentPage(<TripFlights key={status} trip={trip}/>);
        } else {
            setCurrentPage(<TripChecklist key={status} trip={trip}/>);
        }

        // console.log(location.state.trip)
        
    }, [page]);

    
    function pageClick(e) {
        let pages = ['overview', 'lists', 'checklist', 'flights']
        for (let i = 0; i < pages.length; i++) {
            document.getElementById(pages[i]).classList.remove("active-underline")
        }

        document.getElementById(e.target.id).classList.add("active-underline");
        setPage(e.target.id);

        if (e.target.id === 'overview') {
            setPage("overview");
            // setCurrentPage(<TripOverview key={status} trip={trip}/>);
        } else if (e.target.id === 'lists') {
            setPage("lists");
            // setCurrentPage(<TripLists trip={trip}/>);
        } 
        // else if (e.target.id === 'budget') {
        //     setPage("budget");
            // setCurrentPage(<TripChecklist trip={trip}/>)
        // } 
        else if (e.target.id === 'checklist') {
            setPage("checklist");
            // setCurrentPage(<TripChecklist trip={trip}/>)
        }
        else if (e.target.id === 'flights') {
            setPage("flights");
            // setCurrentPage(<TripChecklist trip={trip}/>)
        }

        setStatus("loaded")
    }

    return (
        trip != null ?
        <TripPage>
            <TripBanner trip={trip}/>
            <NavList>
                <NavItem onClick={pageClick} className='active-underline' id="overview">Overview</NavItem>
                <NavItem onClick={pageClick} id="lists">Lists</NavItem>
                <NavItem onClick={pageClick} id="checklist">Checklist</NavItem>
                {/* <NavItem onClick={pageClick} id="budget">Budget</NavItem> */}
                <NavItem onClick={pageClick} id="flights">Flights</NavItem>
            </NavList>
            {currentPage}
        </TripPage>
        :
        <></>
    );
}

export default Trip;
