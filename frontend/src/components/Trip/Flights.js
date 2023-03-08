import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const FlightsContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 350px);
    margin: 0px;
`

const SearchWidget = styled.div`
    width: 100%;
    height: 100%;
`

function Flights(props) {
    const [trip, setTrip] = useState(props.trip)

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        console.log(window)
        const head = document.querySelector("head");
        const script = document.createElement("script");

        script.setAttribute("src", "https://widgets.skyscanner.net/widget-server/js/loader.js");
        head.appendChild(script);
        // window.skyscanner.widgets.load();
    }, [props.trip])

    return (
        <FlightsContainer>
            {/* <SearchWidget id="searchWidget"><iframe id="widgetIframe" src="https://www.expedia.co.uk/marketing/widgets/searchform/widget?wtt=6&tp1=1&tp2=&lob=H,FH,F&des=&wbi=1&olc=&whf=7&hfc=&wif=7&ifc=FFFFFF&wbc=FFFFFF&wbf=4&bfc=1746A2&wws=2&sfs=H600FW300F&langid=2057" width="100%" height="100%" scrolling="no" frameborder="0"></iframe></SearchWidget> */}
            {/* <section>
                <h1>Hotels</h1>

                <form action="http://www.kayak.com/s/search/air" method="GET">
                    <fieldset>
                        <legend>Origin</legend>

                        <label>From
                            <input type="search" name="l1" data-smarty-s="1" size="50" autocomplete="off"/></label>
        
                        <label>Depart
                            <input type="date" name="t1"/></label>
                    </fieldset>
        
                    <fieldset>
                        <legend>Destination</legend>
            
                        <label>To
                            <input type="search" name="l2" data-smarty-s="1" size="50" autocomplete="off" required/></label>
            
                        <label>Return
                            <input type="date" name="t2"/></label>
                    </fieldset>
        
                    <button type="submit">Search</button>
            
                </form>
            </section> */}
            {/* <script src="https://widgets.skyscanner.net/widget-server/js/loader.js" async></script> */}
            <div
                data-skyscanner-widget="FlightSearchWidget"
                data-locale="en-GB"
            />
            {/* <script src="https://widgets.skyscanner.net/widget-server/js/loader.js" async></script> */}
        </FlightsContainer>
    );
}

export default Flights;
