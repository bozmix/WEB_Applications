import React from 'react';

import './Header.css';

const Header = (props/*{isLoggedIn, onLogIn, onLogOut}*/) => {
    //console.log('Header: ', props.isLoggedIn, props.onLogIn);
    let onClickCallBack = props.onLogIn;
    let buttonText = 'LogIn';
    let name = null;

    if (props.isLoggedIn){
        onClickCallBack = props.onLogOut;
        buttonText = 'LogOut';
        name = props.name;
    }

    return (
        <header className='header'>
            <h1>My React Blog</h1>
            <p>{name}</p>
            <button onClick={onClickCallBack}>{buttonText}</button>
        </header>
    )
};

export { Header };
