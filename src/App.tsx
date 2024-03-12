import React, { useState, useContext, createContext, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'
import PostComponent from './pages/home/components/Post'
import { URLS } from './utils/URLS'
import { Contact, Post, UserContextType, PostsContextType } from './types';

const UserContext = createContext<UserContextType | undefined>(undefined);
const PostsContext = createContext<PostsContextType | undefined>(undefined);

function App() {
  const [user, setUser] = useState<Contact | undefined>(undefined)
  const [users, setUsers] = useState<Array<Contact>>([])
  const [posts, setPosts] = useState<Array<Post>>([])

  useEffect(() => {
    // Fetch users
    fetch(URLS.USERS)
      .then((response) => response.json())
      .then(data => {setUsers(data); setUser(data.length > 0 ? data[0] : undefined)})
    // Fetch posts
    fetch(URLS.POSTS)
      .then((response) => response.json())
      .then(setPosts)
  }, [])

  return (
    <>
      <UserContext.Provider value={{ user, setUser, users, setUsers }}>
        <PostsContext.Provider value={{ posts, setPosts }}>
          <header>
            <Header />
          </header>
          <div className='main'>
            <div className='left-bar'>
              <Sidebar />
            </div>
            <div className='content'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/post/:id' element={<PostComponent />} />
              </Routes>
            </div>
          </div>
        </PostsContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export { App, UserContext, PostsContext }
