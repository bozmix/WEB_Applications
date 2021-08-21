import { Fragment, useEffect } from 'react';
import './App.css';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Users } from './Users/Users';
import { useState } from 'react';
import { getUsers } from '../service/userService';


function App() {
  let [users, setUsers] = useState([])
  let [GridView, setGridView] = useState(false);
  let buttonText = (GridView) ? 'Switch to list view' : 'Switch to grid view';
  let buttonClick = () => {
     setGridView(!GridView)
  } 

  useEffect(()=>{
    getUsers()
    .then(users => setUsers(users))
  }, [])

  const refresh = () => {
    getUsers()
      .then(newUsers => {
        setUsers(newUsers)
      })
  }
  //console.log('from app.js users:', users)

  return (
    <Fragment>
      <Header buttonText={buttonText} buttonClick={buttonClick} refresh={refresh}/>
      <Users GridView={GridView} users={users}/>
      <Footer/>
    </Fragment>
  );
}

export default App;
