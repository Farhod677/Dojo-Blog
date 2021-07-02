import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const BlogDetails = ({ update, isPending }) => {
    const [blog, setBlog] = useState(null);
    const { id } = useParams();
    const history = useHistory();

    fetch(`http://localhost:3000/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data));


    const handleDelete = id => {
        const requestOptions = {
          method: 'DELETE'
        };

        fetch(`http://localhost:3000/blogs/${id}`, requestOptions)
            .then(res => {
                if (res.ok) {
                    update();
                    history.push('/');
                }
            });
        };
    return (
        <div className='blog-details'>
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;