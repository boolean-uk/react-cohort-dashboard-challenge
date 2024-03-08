import { createContext, useState } from 'react'
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
    firstName: "John",
    lastName: "Userman",
    favouriteColour: '#f4dc78',
    id: 16
  })
  const loginUser = { get: getLoginUser, set: setLoginUser }

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

