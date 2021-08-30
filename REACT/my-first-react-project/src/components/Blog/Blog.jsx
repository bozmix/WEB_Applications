import React from 'react';
import PropTypes from 'prop-types';
import './Blog.css';
import {Link} from 'react-router-dom';

export const Blog = ({isAuthorized = false, post = {}}) => {
    return (
        <div className='blogText'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/single-blog/${post.id}`}>Read more...</Link>
        </div>
    )
}

Blog.propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
    post: PropTypes.object.isRequired
}

Blog.defaultProps = {
    isAuthorized: false
}