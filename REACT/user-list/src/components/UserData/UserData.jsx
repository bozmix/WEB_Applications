import React from 'react';

import './UserData.css';

export const UserData = (props) => {
    return (
        <div className='userdata'>
            <p className='name'>Name: {props.user.name.first}</p>
            <p className='email'>email: {props.user.email}</p>
            <p className='dob'>Date of birth: {props.user.dob.date}</p>
        </div>
    )
}