import { useState } from 'react'
import Layout from './Layout'
import { Route, Router, Routes } from 'react-router-dom'
import './index.css'
import PostContext from './Helper/Contex'
import Profile from './Profile/Profile'
import FullPost from './Content/FullPost'


function App() {


  return (
    <PostContext>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/profile/main" element={<Profile/>}/>
        <Route path="/post/:id" element={<FullPost/>}/>
      </Routes>
    </PostContext>
  )
}

export default App
