import React from 'react';

import './Header.css';

const Header = ({isLoggedIn, onLogIn, onLogOut}) => {
    console.log('Header: ', isLoggedIn, onLogIn);
    return (
        <header className='header'>
            <h1>My React Blog</h1>
            <button onClick={isLoggedIn ? onLogOut : onLogIn}>{isLoggedIn ? 'LogOut' : 'LogIn'}</button>
        </header>
    )
};

export { Header };
