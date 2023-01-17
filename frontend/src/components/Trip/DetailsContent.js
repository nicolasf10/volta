import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const ContentContainer = styled.div`
    border-radius: 10px;
    background-color: #fff;
    width: 80vw;
    height: 80vh;

    @media(max-width: 991px) {
        width: 90vw;
        height: 90vh;
    }
`

const BackContainer = styled.div`
    margin: 15px;
    cursor: pointer;
    font-family : "Sen", "sans-serif";
`

const BackIcon = styled.i`

`


function DetailsContent(props) {
    const [ list, setList ] = useState(props.list);

    useEffect(() => {
        console.log(props.list);
        setList(props.list);
    }, [])

    //test
    return (
        <ContentContainer>
            <BackContainer onClick={() => props.parentStateSetter('none')}>
                <BackIcon className="fa fa-solid fa-arrow-left"></BackIcon> Back
            </BackContainer>
        </ContentContainer>
    );
}

export default DetailsContent;
