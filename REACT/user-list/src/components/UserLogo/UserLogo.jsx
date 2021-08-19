import React from 'react';

import './UserLogo.css';


export const UserLogo = (props) => {
    return (
        !props.GridView ?
        <div className='userlogo'>
            <img src={props.user.picture.medium} alt='' />
        </div>
        :
        <div className='userlogogrid'>
            <img src={props.user.picture.large} alt='' />
        </div>
    )
}