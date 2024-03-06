import { useState, useEffect, createContext } from 'react'
import './App.css'
import Dashboard from './Dashboard'
import Header from './Header'
import LeftMenu from './LeftMenu'
const URL = "https://boolean-api-server.fly.dev/thegrevling/contact"
export const UsersContext = createContext()
export const CurrentUserContext = createContext()

function App() {
  const [users, setUsers] = useState([])
  const [currentUser,setCurrentUser]=useState(undefined)
  
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(setUsers)
  }, [])

  useEffect(()=>{
    setCurrentUser(users.find((user)=>user.id===1))
  },[users])

  return (
    <div>
      <CurrentUserContext.Provider value={{currentUser:currentUser, setCurrentUser:setCurrentUser}} >
        <Header/>
        <LeftMenu />
        <UsersContext.Provider value={users}>
          <Dashboard />
        </UsersContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
