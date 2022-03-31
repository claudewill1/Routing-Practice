import React from 'react';
import {useParams} from 'react-router-dom';

const Page = (props) => {
    const {word ,word1, word2} = useParams();
    const inlineStyle = {
        color: word1,
        backgroundColor: word2
    }
    
    return (
        <div>
            {
                isNaN(word)?
                <h1 style={inlineStyle}>The word is: {word}</h1>:
                <h1 style={inlineStyle}>The number is: {word}</h1>
            }
        </div>
    )
}

export default Page;