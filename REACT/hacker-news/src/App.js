import './App.css';
import React, {useState, useEffect} from 'react';
import {Header} from './components/Header/Header';
import { Main } from './components/Main/Main';
import { getStories } from '../src/Services/Services.js';
let newsArray =[];


function App() {
  let [stories, setStories] = useState([]);

  useEffect(() => {
        getStories()
          .then(myresponse => {
            myresponse.forEach(id => {
              fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                .then(response1 => response1.json())
                .then(myresponse1 => newsArray.push(myresponse1))
            })
          })
          setStories(newsArray);
      }, []
  )
 //console.log('stories after useeffect',stories)

  return (
    <React.Fragment>
      <Header />
      <Main stories={stories}/>
    </React.Fragment>
  );
}

export default App;
