import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    return (
        <div className='blog-preview'>
            <Link to={`blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </Link>
        </div>
    );
}
 
export default Blog;