import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </>
  )
}

export default App
