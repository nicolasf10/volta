import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import UnsplashImagePickerModal from 'unsplash-image-picker';


const Container = styled.div`
    border-radius: 10px;
    /* border: 2px solid red; */
`

const UrlForm = styled.form`
    padding: 10px;
    display: flex;
    flex-direction: column;
    font-family: "Sen", sans-serif;
`

const UrlInput = styled.input``

const FormButton = styled.button`
    background-color: #1746A2;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin-top: 10px;
    padding: 5px;
`


function UnsplashPicker(props) {
    const [ url, setUrl ] = useState("");

    const saveClick = (e) => {
        props.close()
    }

    return (
        <Container>
            <UrlForm onSubmit={(event) => event.preventDefault()}>
                <UrlInput onChange={(e) => setUrl(e.target.value)} value={url} placeholder="Image URL here..." type="link"/>
                <FormButton type="submit" onClick={saveClick}>Save</FormButton>
            </UrlForm>
        </Container>
    );
}

export default UnsplashPicker;
