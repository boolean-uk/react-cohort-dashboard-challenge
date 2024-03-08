import './App.css'

import Body from './components/Body'
import SideMenu from './components/SideMenu'
import Header from './components/Header'
import { createContext } from 'react'

const InstanceContext = createContext({})

function App() {
  const _currentInstance = {
    baseURL: "https://boolean-api-server.fly.dev/migzus/",
    userID: 1
  }

  return (
    <div className='grid_body'>
      <InstanceContext.Provider value={_currentInstance}>
        <Header />
        <SideMenu />
        <Body />
      </InstanceContext.Provider>
    </div>
  )
}

export { App, InstanceContext }
