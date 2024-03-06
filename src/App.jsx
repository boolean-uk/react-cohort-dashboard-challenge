import { useState } from 'react';
import './styles/App.css'
import { createContext } from 'react'
import { useEffect } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/spectraldesign/contact')
      .then((response) => response.json())
      .then((data) => setUser(data[0]))
  }, []);

  return (
    <>
      {
        user ?
          <UserContext.Provider value={user}>
            <Header />
          </UserContext.Provider>
          :
          <h1>Loading...</h1>
      }

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
