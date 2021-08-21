import React from 'react';
//import {results} from '../../data/data';

import './Users.css';

import { User } from '../User/User';
//import { getUsers } from '../../service/userService';

export const Users = ({GridView, users}) => {

    const className = GridView ? 'usersgrid' : 'users';


    return (
        <div className={className}>
            {users.map((user, index) => <User user={user} key={index} GridView={GridView} />)}
        </div>
)
}
/*
class Users extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
        }
    }

    componentDidMount(){
        getUsers()
        .then(users => {
            this.setState({users})
        })
    }

   
    render (){
        const {GridView} = this.props;
        const className = GridView ? 'usersgrid' : 'users';
        return (
            <div className={className}>
                {this.state.users.map((user, index) => <User user={user} key={index} GridView={GridView} />)}
            </div>
        )
    }
}

export {Users}
/*
const Users = ({GridView}) => {
    const className = GridView ? 'usersgrid' : 'users'
    return (
      /*  !GridView ?
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
         <div className={className}>
             {results.map((user, index) => <User user={user} key={index} GridView={GridView}/>)}
         </div>
    )
}*/

//export {Users}