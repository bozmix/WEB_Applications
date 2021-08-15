import  React, {Component}  from 'react';
import { blogPosts } from '../../data/blog-posts.js';
import './BlogList.css';

export class BlogList extends Component {
    constructor (props){
        super(props);
        this.state = {
            count: 0,
        };
    }

    onCountClick = () => {
        this.setState({count: this.state.count + 1});
    }

    render (){
        const {count} = this.state;
        return (
        <div className='blogItem'>
            <button onClick={this.onCountClick}>click me!</button>
            <span>{count}</span>

            {blogPosts.map((post, index) => (
                <div className='blogText' key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}

        </div>

        )
    }
}
/*
const BlogList = ({count, onClick}) => {
    return (
        /*
        <div className='blogItem'>
            <h4>Blog Title</h4>
            <div className='blogText'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam vitae earum soluta consequatur, nam nihil odit laborum natus et quae dolore vero eaque culpa pariatur. Quia dicta facere itaque laudantium vero atque rem sapiente at ut voluptas magnam esse eveniet laborum ducimus expedita error modi, incidunt labore quibusdam tempora consectetur.</p>
            </div>
        </div>
        *//*
        <div className='blogItem'>
            <button onClick={onClick}>click me!</button>
            <span>{count}</span>

            {blogPosts.map((post, index) => <Blog post={post} key={index}/>)}
                

        </div>
            
        
    );
};

export {BlogList};
*/