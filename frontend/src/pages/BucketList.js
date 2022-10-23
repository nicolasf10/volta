import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NavbarComponent from '../components/Navbar';
import styled from 'styled-components';
import BucketListDashboard from '../components/bucketListDashboard';


const BucketListPage = styled.div`
    
`

function BucketList()
{
    return (
        <BucketListPage>
            <NavbarComponent active='bucket-list' />
            <BucketListDashboard />
        </BucketListPage>
    );
}


export default BucketList;