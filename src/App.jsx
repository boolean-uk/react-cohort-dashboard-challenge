import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Profile } from './components/Profile'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

const ConnectionContext = createContext();
const UsersContext = createContext();

function App() {

  const url = "https://boolean-api-server.fly.dev/Sebank/post"
  const usersUrl = "https://boolean-api-server.fly.dev/Sebank/contact"

  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
      fetch(url, {
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
    <>
    <ConnectionContext.Provider value={{url: url, usersUrl: usersUrl}}>
    <UsersContext.Provider value={{users: users, setUsers: setUsers, 
      currentUser: currentUser, setCurrentUser: setCurrentUser, 
      posts: posts, setPosts: setPosts}}>
    <nav>
      <Header />
      <Sidebar />
    </nav>
      <Routes>
        <Route path="/" element={<Dashboard posts={posts}/>}/>
        <Route path="/profile" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser} setUsers={setUsers}/>}/>
      </Routes>
    </UsersContext.Provider>
    </ConnectionContext.Provider>
    </>
  )
}

export { App, ConnectionContext, UsersContext };