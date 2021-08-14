import  React  from 'react';
import { blogPosts } from '../../data/blog-posts.js';
import { Blog } from '../Blog/Blog.jsx';
import './BlogList.css';

const BlogList = () => {
    return (
        /*
        <div className='blogItem'>
            <h4>Blog Title</h4>
            <div className='blogText'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam vitae earum soluta consequatur, nam nihil odit laborum natus et quae dolore vero eaque culpa pariatur. Quia dicta facere itaque laudantium vero atque rem sapiente at ut voluptas magnam esse eveniet laborum ducimus expedita error modi, incidunt labore quibusdam tempora consectetur.</p>
            </div>
        </div>
        */
        <div className='blogItem'>
            {blogPosts.map((post, index) => <Blog post={post} key={index}/>)}
                

        </div>
            
        
    );
};

export {BlogList};
