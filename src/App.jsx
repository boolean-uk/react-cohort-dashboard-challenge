import { useState, useEffect, createContext } from 'react'
import Header from './components/header/Header'
import LeftSide from './components/leftSide/LeftSide'
import Dashboard from './components/body/Dashboard'
import PostListItem from './components/body/posts/PostListItem'
import Profile from './components/Profile'
import { Route, Routes } from "react-router-dom"
import './App.css'

const postsUrl = "https://boolean-api-server.fly.dev/Vayeros/post"
const usersUrl = "https://boolean-api-server.fly.dev/Vayeros/contact"
const UsersContext = createContext()
const ConnectionContext = createContext()

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
      fetch(postsUrl, {
          method: "GET",
          headers: {
              'Content-Type': 'application/json',
          }
      }).then(res => res.json()).then(setPosts)
      fetch(usersUrl, {
        method: "GET", 
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => res.json()).then(setUsers)
  }, [])

  useEffect(() => {
    setCurrentUser(users[0]);
  }, [users])

  return (
    <div className="main-page">
    <ConnectionContext.Provider value={{url: postsUrl, usersUrl: usersUrl}}>
      <UsersContext.Provider value={{users: users, setUsers: setUsers, 
        currentUser: currentUser, setCurrentUser: setCurrentUser, 
        posts: posts, setPosts: setPosts}}> 

        <div className="header">
          <Header />
        </div>
        <div className="left-side">
          <LeftSide />
        </div>
        <div className="body">
          <Routes>
            <Route path="/" element={<Dashboard posts={posts.toReversed()}/>}/>
            <Route path="/profile/:id" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser} setUsers={setUsers}/>}/>
            <Route path="post/:postId" element={<PostListItem />}/>
          </Routes>
        </div>
        </UsersContext.Provider>
      </ConnectionContext.Provider>
    </div>
  )
}

export { App, UsersContext, ConnectionContext }
