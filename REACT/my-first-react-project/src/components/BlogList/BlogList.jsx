import  React  from 'react';
//import { blogPosts } from '../../data/blog-posts.js';
import { getBlogs } from '../../services/blogService.js';
import {Blog} from '../Blog/Blog';
import './BlogList.css';

export class BlogList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            blogPosts: []
        }
    }

    componentDidMount(){
        getBlogs()
            .then(blogs => {
                this.setState({
                    blogPosts: blogs
                })
            })
    }

    render(){
        return (
        <div className='blogItem'>
            {this.state.blogPosts.map((post, index) => (
                <Blog post={post} key={index} />
            ))}
        </div>
        )
    }
}

/*
const BlogList = () => {
    return (
        /*
        <div className='blogItem'>
            <h4>Blog Title</h4>
            <div className='blogText'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam vitae earum soluta consequatur, nam nihil odit laborum natus et quae dolore vero eaque culpa pariatur. Quia dicta facere itaque laudantium vero atque rem sapiente at ut voluptas magnam esse eveniet laborum ducimus expedita error modi, incidunt labore quibusdam tempora consectetur.</p>
            </div>
        </div>
        
        <div className='blogItem'>
            {blogPosts.map((post, index) => <Blog post={post} isAuthorized={true} key={index}/>)}
                

        </div>
            
        
    );
};

export {BlogList};*/
