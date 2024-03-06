import { useState, createContext } from 'react'
import React from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Body from './components/Body/Body'

import "./App.css"

export const WebsiteContext = createContext()

function App() {

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    phone: "",
    website: "",
    companyName: "",
    companyCatchPhrase: "",
    companyBusinessStatement: ""
  });

  return (
    <>
    <WebsiteContext.Provider value={{profile, setProfile}}>
      <div className="header">
        <Header />
      
        <div className="container">
          <SideBar />
          <Body />
        </div>
      </div>
    </WebsiteContext.Provider>
    </>
  )
}


export default App
