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

export default function App() {

  const [getLoginUser, setLoginUser] = useState({
    firstName: "A",
    lastName: "A",
    favouriteColour: "",
    id: 1
  })

  const loginUser = { get: getLoginUser, set: setLoginUser }

  useEffect(() => {
    fetch(`${APIURL}/contact/1`)
        .then(response => response.json())
        .then(data => loginUser.set(data))
}, [])

  return (
    <loginUserContext.Provider value={{loginUser}}>
      <div className='view'>
        <TopbarComponent />
        <div className='page'>
          <SidebarComponent />
          <DashboardComponent />
        </div>
      </div>
    </loginUserContext.Provider>

  )
}

