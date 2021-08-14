import { Fragment } from 'react';
import './App.css';
import { Header } from './Header/Header';
import { Users } from './Users/Users';

function App() {
  return (
    <Fragment>
      <Header/>
      <Users/>
    </Fragment>
  );
}

export default App;
