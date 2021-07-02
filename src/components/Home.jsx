import React from 'react';
import BlogList from './BlogList';

const Home = ({ blogs, handleDelete, isPending }) => {
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} title={'All Blogs'}/>}
        </div>
    );
}
 
export default Home;