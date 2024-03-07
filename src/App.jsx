import { useState, useEffect, createContext } from 'react'

import './App.css'

import Header from './Header'
import SideMenu from './SideMenu'
import Main from './Main'

const UserContext = createContext()
const PostContext = createContext()

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/nora-hansen/contact")
      .then(response => response.json())
      .then(setUsers)
  }, [])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/nora-hansen/post")
        .then(response => response.json())
        .then(setPosts)
}, [])

  if (users.length === 0) return <p>Loading users...</p>
  if (users.length > 0 && !currentUser) setCurrentUser(users[0])

  return (
    <div className="container">
      <PostContext.Provider value={{posts, setPosts}}>
      <UserContext.Provider value={{users, currentUser, setCurrentUser}} >
        <Header />
        <div className="container-nav-main">
          <SideMenu />
          <Main />
        </div>
      </UserContext.Provider>
      </PostContext.Provider>
    </div>
  )
}

export { App, UserContext, PostContext }
