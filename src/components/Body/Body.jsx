import React from 'react'
import ProfilePage from './ProfilePage'
import "./Body.css"
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import PostPage from './PostPage'

function Body() {
  return (
<main className='content-body'>
  <Routes>
    <Route path="/" element={<Dashboard />}/>
    <Route path="/profile/" element={<ProfilePage />}/>
    <Route path="/post/:id" element={<PostPage />}/>
  </Routes>
</main>
  )
}

export default Body