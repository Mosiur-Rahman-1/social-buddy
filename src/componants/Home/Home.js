import React from 'react';
import './Home.css';
import { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import AllPost from '../AllPost/AllPost';



// Decalared main function
const Home = () => {

//Using state and fetching posts data from json placeholder
const [posts, setPosts] = useState([]);
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => setPosts(posts))
  .catch(error => console.log(error))
}, [])

return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent = "space-between">
      {
        posts.map(posts => <AllPost posts = {posts}></AllPost>)
      }
    </Box>
    );
};

export default Home;