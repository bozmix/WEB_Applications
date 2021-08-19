import { Fragment } from 'react';
import './App.css';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Users } from './Users/Users';
import { useState } from 'react';


function App() {
  let [GridView, setGridView] = useState(false);
  let buttonText = (GridView) ? 'Switch to list view' : 'Switch to grid view';
  let buttonClick = () => {
     setGridView(!GridView)
  } 

  return (
    <Fragment>
      <Header buttonText={buttonText} buttonClick={buttonClick}/>
      <Users GridView={GridView}/>
      <Footer/>
    </Fragment>
  );
}

export default App;
