import React from 'react';
import './Header.css';
import { Headline } from '../Headline/Headline';

const Header = ({buttonText, buttonClick, refresh}) => {



    return (
        <div className='header'>
            <Headline/>
            <button onClick={buttonClick}>{buttonText}</button>
            <button onClick={refresh}>Refresh Page</button>
        </div>
    )
}
export {Header};
