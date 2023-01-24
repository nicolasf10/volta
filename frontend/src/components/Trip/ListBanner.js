import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const BannerContainer = styled.div`

`



const BannerHeader = styled.h4``



function ListBanner(props) {
    const [ list, setList ] = useState(props.list);

    useEffect(() => {
        console.log(props.list);
        setList(props.list);
    }, [props.list])

    
    return (
        <BannerContainer>
            <BannerHeader>
                {list.title}
            </BannerHeader>
        </BannerContainer>
    );
}

export default ListBanner;
