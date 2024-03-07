import React from 'react';
import {Routes, Route} from 'react-router-dom'
import PostComponent from './PostComponent';
import Post from './Post';
import Profile from './Profile';

const AppRouter = () => {
  return (
    <section>
    <Routes>
      <Route path='/home' element={<PostComponent />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/post/:id' element={<Post/>}/>
    </Routes>

    </section>
  );
}

export default AppRouter;
