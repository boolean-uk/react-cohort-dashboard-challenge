import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { UserContextAPIContext, UserContextAPIProvider } from './contextAPI/UserContextAPI';
import { HttpRequestsContextAPIProvider } from './contextAPI/HttpRequestsContextAPI';

function App() {

  return (
    <>
    <Routes>

      <Route path="/" element={
      <UserContextAPIProvider>
          <HttpRequestsContextAPIProvider>
            <Dashboard />
          </HttpRequestsContextAPIProvider>
        </UserContextAPIProvider>}/>
        
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </>
  )
}

export default App
