import React from 'react';
import { OneNews } from '../OneNews/OneNews';

import './Main.css';

export const Main = ({stories}) => {
    console.log('Stories from main.jsx',stories)
    return (
        <div className='main'>
            {
                stories.map((story, index) => <OneNews story={story} key={index}/>)
            }
            
        </div>
    )
}