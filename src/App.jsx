import { createContext, useEffect, useState } from 'react'
import './App.css'
import TopbarComponent from './components/Topbar'
import SidebarComponent from './components/Sidebar'
import DashboardComponent from './components/Dashboard'

//Global api url
const BASEURL = 'https://boolean-api-server.fly.dev/'
const GITUSER = 'moph13121'
export const APIURL = BASEURL + GITUSER

export const loginUserContext = createContext()
export const userContext = createContext()

export default function App() {

  const [getLoginUser, setLoginUser] = useState({
    firstName: "A",
    lastName: "A",
    favouriteColour: "",
    id: 1
  })
  const loginUser = { get: getLoginUser, set: setLoginUser }

  const [getUsers, setUsers] = useState([])
  const users = { get: getUsers, set: setUsers }

  useEffect(() => {
    fetch(`${APIURL}/contact/1`)
      .then(response => response.json())
      .then(data => loginUser.set(data))
  }, [])

  return (
    <loginUserContext.Provider value={{ loginUser }}>
      <userContext.Provider value={{ users }}>
        <div className='view'>
          <TopbarComponent />
          <div className='page'>
            <SidebarComponent />
            <DashboardComponent />
          </div>
        </div>
      </userContext.Provider>
    </loginUserContext.Provider>

  )
}

