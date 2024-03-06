import { useState } from 'react';
import './styles/App.css'
import { createContext } from 'react'
import { useEffect } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/spectraldesign/contact')
      .then((response) => response.json())
      .then((data) => setUser(data[0]))
  }, []);

  return (
    <UserContext.Provider value={user}>
      {
        user ?
          <Header />
          :
          <h1>Loading...</h1>
      }
      <Navbar />

      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/profile/:id" element={
          <Profile />
        } />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
