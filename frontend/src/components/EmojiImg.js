import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Emoji = styled.img`
    height: 20px;
    width: 20px;
    margin: 5px;
    /* display: inline; */
`

function EmojiImg(props)
{
    return (
        <Emoji style={{height: props.size, width: props.size}} src={"https://emojicdn.elk.sh/" + props.emoji}/>
    );
}


export default EmojiImg;