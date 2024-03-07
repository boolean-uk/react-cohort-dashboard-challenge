import React from 'react'
import ProfilePage from './ProfilePage'
import "./Body.css"
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'

function Body() {
  return (
<main className='content-body'>
  <Routes>
    <Route path="/" element={<Dashboard />}/>
    <Route path="/profile/" element={<ProfilePage />}/>
  </Routes>
</main>
  )
}

export default Body