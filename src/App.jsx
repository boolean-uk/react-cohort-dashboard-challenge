import { useState, useEffect, createContext } from 'react'
import Dashboard from './Components/Dashboard.jsx'
import Header from './Components/Header.jsx'
import NavBar from './Components/NavBar'
import "./styles/App.css";


const URL = "https://boolean-api-server.fly.dev/JensArvid/contact"
export const UsersContext = createContext()
export const CurrentUserContext = createContext()

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(setUsers)
  }, [])

  useEffect(() => {
    setCurrentUser(users.find((user) => user.id === 1))
  }, [users])

  return (
    <div className='app-container'>
      <CurrentUserContext.Provider value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }} >
        <Header />
        <div className='content-container'>
          <NavBar />
          <UsersContext.Provider value={{ users: users, setUsers: setUsers }}>
            <Dashboard />
          </UsersContext.Provider>
        </div>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App