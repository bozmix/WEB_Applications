import React from 'react';
import './User.css';
import {UserLogo} from '../UserLogo/UserLogo';
import {UserData} from '../UserData/UserData';

const User = (props) => {
    
    return (
        !props.GridView ?
        <div className='user'>
            <UserLogo user={props.user} key={props.index} GridView={props.GridView}/>
            <UserData user={props.user} key={props.index} GridView={props.GridView}/>
        </div>
        :
        <div className='usergrid'>
            <UserLogo user={props.user} key={props.index} GridView={props.GridView}/>
            <UserData user={props.user} key={props.index} GridView={props.GridView}/>
        </div>
    )
    
}

export {User}