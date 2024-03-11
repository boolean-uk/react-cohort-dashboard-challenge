import { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { Dashboard } from './Components/Dashboard/Dashboard.jsx'
export const UserContext = createContext()

function App() {
  const [user, setUser] = useState(undefined)

  async function getUser() {
    await fetch("https://boolean-api-server.fly.dev/kristianverduin/contact")
      .then(res => res.json())
      .then(res => setUser({...res[0]}))
  }

  useEffect(() => {
    getUser()
  }, [])

  if(!user) return <p> Loading ... </p>

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser, getUser: getUser }}>
      <div className='app'>
        <Header />
        <Dashboard />
      </div>
  </UserContext.Provider>
  )
}

export { App }
