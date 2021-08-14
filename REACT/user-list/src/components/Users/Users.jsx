import React from 'react';
import {results} from '../../data/data';

import './Users.css';

import { User } from '../User/User';

export const Users = () => {
    return (
        <div className='users'>
            {
                results.slice(0, 10).map((user, index) =>  <User user={user} key={index}/>)
            }
           
        </div>
    )
}