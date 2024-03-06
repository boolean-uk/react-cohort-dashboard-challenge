import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import UserProfile from './Pages/UserProfile/UserProfile'
import PostView from './Pages/Home/PostView/PostView'

function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<PostView />} />
        <Route path='/profile/:id' element={<UserProfile />} />
      </Routes>
    </div>
  )
}

export default Dashboard