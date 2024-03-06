import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import UserProfile from './Pages/UserProfile/UserProfile';
import PostView from './Pages/Home/PostView/PostView';

const URL = "https://boolean-api-server.fly.dev/thegrevling/post";
export const PostsContext = createContext();

function Dashboard() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div className='dashboard-component'>
      <PostsContext.Provider value={{ posts, fetchPosts }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:id' element={<PostView />} />
          <Route path='/profile/' element={<UserProfile />} />
        </Routes>
      </PostsContext.Provider>
    </div>
  );
}

export default Dashboard;
