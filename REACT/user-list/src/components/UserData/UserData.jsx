import React from 'react';

import './UserData.css';


export const UserData = (props) => {

    let date = new Date (props.user.dob.date);
    let displayDate = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear(); 
    let gridDate = date.toDateString();
    let name = (props.user.name.first).split('');
    name[0] = name[0].toUpperCase();
    let name1 = name.join('');
    return (
        !props.GridView ?
        <div className='userdata'>
            <p className='name'>Name: {props.user.name.first}</p>
            <p className='email'>email: {props.user.email}</p>
            <p className='dob'>Date of birth: {displayDate}</p>
        </div>
        :
        <div className='userdatagrid'>
            <p className='name'>{name1}</p>
            <p className='email'>email: {props.user.email}</p>
            <p className='dob'>Date of birth: {gridDate}</p>
        </div>
    )
}