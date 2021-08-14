import React from 'react';
import PropTypes from 'prop-types';
import './Blog.css';

export const Blog = ({isAuthorized = false, post = {}}) => {
    return (
        <div className='blogText'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
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