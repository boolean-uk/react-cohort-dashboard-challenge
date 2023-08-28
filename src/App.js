import './styles/app.css'

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import LeftMenu from './components/LeftMenu';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import DataContext from './DataContext';
import ViewPostPage from './pages/ViewPostPage';

function App() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState(null)

  async function getUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const json = await response.json()
    setUser(json)
  }

  useEffect(() => {
    getUserData()
    console.log('App::useEffect user', user)
  }, [])

  return (
    user &&
    <div className="app">
      <DataContext.Provider value={{ user, posts, setPosts }}>
        <Header />
        <LeftMenu />

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/posts/:id' element={<ViewPostPage />} />
        </Routes>
        
      </DataContext.Provider>
    </div>
  );
}

export default App;
