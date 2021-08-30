import { Fragment, useEffect } from 'react';
import './App.css';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Users } from './Users/Users';
import { useState } from 'react';
import { getUsers } from '../service/userService';


function App() {
  let [filteredUsers, setFilteredUsers] = useState([]);
  let [users, setUsers] = useState([]);
  let [GridView, setGridView] = useState(false);
  let [searchValue, setSearchValue] = useState('');
  let buttonText = (GridView) ? 'Switch to list view' : 'Switch to grid view';
  let buttonClick = () => {
     setGridView(!GridView)
  } 

  useEffect(()=>{
    getUsers()
    .then(users => {
      setUsers(users);
      setFilteredUsers(users)
    })
  }, [])


  const refresh = () => {
    getUsers()
      .then(newUsers => {
        setFilteredUsers(newUsers)
      })
  }

  const search = (event) => {
    setSearchValue(event.target.value);
    let fu = users.filter(user => (user.name.first).toLowerCase().includes(event.target.value));
    //console.log(filteredUsers)
    setFilteredUsers(fu);
  }

  //console.log('from app.js users:', users)

  return (
    <Fragment>
      <Header buttonText={buttonText} buttonClick={buttonClick} refresh={refresh} search={search} searchValue={searchValue}/>
      <Users GridView={GridView} users={filteredUsers}/>
      <Footer/>
    </Fragment>
  );
}

export default App;
