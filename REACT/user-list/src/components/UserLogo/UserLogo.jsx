import React from 'react';

import './UserLogo.css';


export const UserLogo = (props) => {
    return (
        <div className='userlogo'>
            <img src={props.user.picture.medium} alt='' />
        </div>
    )
}