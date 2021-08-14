import React from 'react';
import './User.css';
import {UserLogo} from '../UserLogo/UserLogo';
import {UserData} from '../UserData/UserData';

export const User = (props) => {
    
    return (
        <div className='user'>
            <UserLogo user={props.user} key={props.index} />
            <UserData user={props.user} key={props.index} />
        </div>
    )
}