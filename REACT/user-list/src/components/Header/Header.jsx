import React from 'react';
import './Header.css';
import { Headline } from '../Headline/Headline';

const Header = ({buttonText, buttonClick, refresh, search, searchValue}) => {



    return (
        <div className='header'>
            <Headline/>
            <button onClick={buttonClick}>{buttonText}</button>
            <button onClick={refresh}>Refresh Page</button>
            <input type='text' placeholder='Search by name' value={searchValue} onChange={search}></input>
        </div>
    )
}
export {Header};
