import { useState, createContext, useEffect } from 'react'
import React from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Body from './components/Body/Body'

import "./App.css"

export const WebsiteContext = createContext()

function App() {

  const [profile, setProfile] = useState({
    firstName: "Anon",
    lastName: "Ymous",
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
    companyBusinessStatement: "",
    id: 1
  });

  useEffect(() =>{
  fetch(`https://boolean-api-server.fly.dev/Eddy1108/contact/1`)
  .then(response => response.json())
  .then(setProfile)}, []
  )

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
