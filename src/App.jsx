import { createContext, useEffect, useState } from 'react'
import './App.css'
import NavComponent from './components/nav/nav.component'
import DashboardComponent from './components/dashboard/dashboard.component'
import Apiprovider from './contexts/apiprovider'

export const UserContext = createContext()

function App() {

  const [user, setUser] = useState()

  useEffect(() => {

    const fetchuser = async () => {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/espensl2000/contact/7`)
      const data = await response.json()
      setUser(data)
    }
    fetchuser()
  }, [])

  return (
    <>
    <Apiprovider>
      {user && <>
      <UserContext.Provider value={{user: user}}>
        <DashboardComponent/> 
      </UserContext.Provider>
      </>}
    </Apiprovider>
    </>
  )
}

export default App
