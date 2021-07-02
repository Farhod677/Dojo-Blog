import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {update()}, []);
  
  const update = () => {
    fetch('http://localhost:3000/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setIsPending(false);
      });
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route path='/' exact render={() => <Home blogs={blogs} isPending={isPending} />} />
            <Route path='/create' render={() => <CreateBlog update={update} />} />
            <Route path='/blogs/:id' render={() => <BlogDetails update={update} isPending={isPending} />} />
            <Route path='*' component={NotFound}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
