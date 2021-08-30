import React from 'react';

import './OneNews.css';

export const OneNews = ({story, index}) => {
    console.log('story iz onenews',story)

    return (
                <div className='onenews' key={index}>
                    <span>{story.title}</span>
                    <span>({story.url})</span>
                    <p>
                        <span>{story.score} points</span> <span>{story.by}</span> <span>{story.time}</span>
                        <span>{story.descendants}</span>
                    </p>
                </div>

    )
}