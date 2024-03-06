import { useState, useEffect, createContext } from 'react'

import './App.css'

import Header from './Header'
import SideMenu from './SideMenu'
import Main from './Main'

const UserContext = createContext()

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/nora-hansen/contact")
      .then(response => response.json())
      .then(setUsers)
  }, [])

  if (users === undefined) return <p>Loading users...</p>

  if (users !== undefined) () => setCurrentUser(users[0])
  console.log(users[0])

  return (
    <div className="container">
      <UserContext.Provider value={{users, currentUser, setCurrentUser}} >
        <Header />
        <div className="container-nav-main">
          <SideMenu />
          <Main />
        </div>
      </UserContext.Provider>
    </div>
  )
}

export { App, UserContext }
