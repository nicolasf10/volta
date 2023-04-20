import React, { useState, useEffect, useCallback } from 'react';
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
import { db } from '../../firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';


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
    const [page, setPage] = useState('overview');
    const [currentPage, setCurrentPage] = useState(<>not updated</>)

    useEffect(() => {
        if (!location.state || !location.state.trip || !location.state.trip.date) {
            console.log("rerouting");
            navigate("/trips");
        } else {
            setTrip(location.state.trip);
            document.title = `Trip to ${location.state.trip.title}`
        }
    }, [location.state.trip, page, trip]);

    async function getTrip() {
        console.log('getting trip')
        const tripRef = doc(db, "trips", location.state.id) // query(collection(db, "trips"), where("id", "array-contains", currentUser.uid));
        const docSnap = await getDoc(tripRef)
        if (docSnap.exists()) {
            setTrip(docSnap.data());
        } else {
            console.log("No such document!");
        }
    }

    const updateTrip = useCallback((newTrip) => {
        setTrip(newTrip);
    }, []);

    const updateChecklist = useCallback((newChecklist) => {
        setTrip(prevState => ({
            ...prevState,
            checklist: location.state.trip.checklist.concat(newChecklist)
        }));
    }, []);

    const refreshTrip = useCallback(() => {
        console.log("Refreshing for sure")
        getTrip();
    }, []);

    
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
            <TripBanner updateTrip={updateTrip} id={location.state.id} trip={trip}/>
            <NavList>
                <NavItem onClick={pageClick} className='active-underline' id="overview">Overview</NavItem>
                <NavItem onClick={pageClick} id="lists">Lists</NavItem>
                <NavItem onClick={pageClick} id="checklist">Checklist</NavItem>
                {/* <NavItem onClick={pageClick} id="budget">Budget</NavItem> */}
                <NavItem onClick={pageClick} id="flights">Flights</NavItem>
            </NavList>
            {
                page ?
                <>
                    <TripOverview display={page === 'overview' ? 'block' : 'none'} id={location.state.id} trip={trip}/>
                    <TripLists refreshTrip={refreshTrip} updateTrip={updateTrip} display={page === 'lists' ? 'flex' : 'none'} id={location.state.id} trip={trip}/>
                    <TripFlights display={page === 'flights' ? 'block' : 'none'} id={location.state.id} trip={trip}/>
                    <TripChecklist display={page === 'checklist' ? 'block' : 'none'} updateChecklist={updateChecklist} id={location.state.id} trip={trip}/>
                </>
                :
                <></>
            }
            </TripPage>
        :
        <></>
    );
}

export default Trip;
