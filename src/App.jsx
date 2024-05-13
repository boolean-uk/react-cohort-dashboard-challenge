import { createContext, useEffect, useState } from 'react'
import './App.css'
import Dashboard from './Components/Dashboard'
import Feed from './Components/Feed'
export const UsersContext = createContext()

function App() {

  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/tzoltie/contact')
      .then(response => response.json())
      .then(json => setUsers(json))
  }, [setUsers])

  return (
    <UsersContext.Provider value={{users}}>
      <section className='app-container'>
        <Dashboard />
        <Feed />
      </section>
    </UsersContext.Provider>
  )
}

export default App
