import React from 'react';
import {Routes, Route} from 'react-router-dom'
import PostComponent from './PostComponent';
import Profile from './Profile';

const AppRouter = () => {
  return (
    <section>
    <Routes>
      <Route path='/home' element={<PostComponent />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>

    </section>
  );
}

export default AppRouter;
