import React, { useEffect, useState } from 'react';
import {getStories} from '../../Services/Services.js';
import { getShortUrl, getTime, numOfComments } from '../../entities/entities.js';
//import { OneNews } from '../OneNews/OneNews';

import './Main.css';

export const Main = () => {
    const [stories, setStories] = useState([]);
    const [ids, setIds] = useState([]);
    

    useEffect(() => {
          getStories()
            .then(myresponse => setIds(myresponse));
        }, []
    )

    useEffect(() => {
        const promises = [];
        ids.forEach(id => {
            promises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(res => res.json()))
          })
          Promise.all(promises).then(listOfStories => setStories(listOfStories))
    },[ids]);
    
    if (!(stories.length === 10)){
        return (
            <div>Loading page...</div>
        )
    } else {
        return (
            <div className='main'>
                <ol>
                { 
                    
                    stories.map((story, index) => {
                        return (
                            
                                <li key={index}>
                                    <div className='onenews' key={index}>
                                    <p className='firstrow'>
                                        <span className='title'>{story.title}</span>
                                        <span className='url'><small className='brackets'>(</small>{getShortUrl(story.url)}<small className='brackets'>)</small></span>
                                    </p>
                                    <p>
                                        <span className='points'><i className="fas fa-heart"></i>{` `}{story.score} points</span> <span className='author'><i className="fal fa-user"></i>{` `}{story.by}</span> <span className='time'><i className="far fa-clock"></i>{` ${getTime(story.time)}`}</span>
                                        <span className='comments'>{ `${numOfComments(story.kids)} comments`}</span>
                                    </p>
                                    </div>

                                </li>
                            
                        )
                    })
                }
                </ol>
                
            </div>
        )
        }
}