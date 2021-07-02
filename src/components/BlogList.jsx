import React from 'react';
import Blog from './Blog';

const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <Blog key={blog.id} blog={blog} handleDelete={handleDelete}/>     
            ))}
        </div>
    );
}
 
export default BlogList;