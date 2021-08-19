import React from 'react';
import {results} from '../../data/data';

import './Users.css';

import { User } from '../User/User';


const Users = ({GridView}) => {

    return (
        !GridView ?
        <div className='users'>
            {
                results.map((user, index) =>  <User user={user} key={index} GridView={GridView}/>)
            }
        </div>
        :
        <div className='usersgrid'>
            {
                results.map((user, index) =>  <User user={user} key={index} GridView={GridView}/>)
            }
        </div>
    )
}

export {Users}