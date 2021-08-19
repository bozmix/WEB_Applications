import React from 'react';
import './Header.css';
import { Headline } from '../Headline/Headline';

const Header = ({buttonText, buttonClick}) => {



    return (
        <div className='header'>
            <Headline/>
            <button onClick={buttonClick}>{buttonText}</button>
        </div>
    )
}
export {Header};
