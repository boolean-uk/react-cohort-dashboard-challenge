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

  const deletePost = (id) => {
    // delete resource
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
    // update posts state as well
    const index = posts.findIndex(post => post.id === id)
    const newPosts = [...posts]
    newPosts.splice(index, 1)
    setPosts(newPosts)
  }

  async function getUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const json = await response.json()
    setUser(json)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    user &&
    <div className="app">
      <DataContext.Provider value={{ user, setUser, posts, setPosts, deletePost }}>
        <Header />
        <LeftMenu />

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile/' element={<Profile />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/posts/:id' element={<ViewPostPage />} />
        </Routes>
        
      </DataContext.Provider>
    </div>
  );
}

export default App;
