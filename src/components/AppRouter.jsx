import React from 'react';
import {Routes, Route} from 'react-router-dom'
import PostComponent from './PostComponent';
import Profile from './Profile';
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/home' element={<PostComponent />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default AppRouter;
