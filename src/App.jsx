import { useState } from 'react'
import './App.css'
import TopbarComponent from './components/Topbar'
import SidebarComponent from './components/Sidebar'
import DashboardComponent from './components/Dashboard'

//Global api url
const BASEURL = 'https://boolean-api-server.fly.dev/'
const GITUSER = 'moph13121'
export const APIURL = BASEURL + GITUSER

export default function App() {

  return (
    <div className='view'>
      <TopbarComponent />
      <div className='page'>
        <SidebarComponent />
        <DashboardComponent />
      </div>

    </div>
  )
}

