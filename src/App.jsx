import { useState } from 'react'
import './App.css'
import Aside from './components/Aside'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [contacts, setContacts] = useState([])
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/MyrtheDullaart/contact')
    .then(response => response.json())
    .then(setContacts)
  }, [])

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/MyrtheDullaart/contact/1')
    .then(response => response.json())
    .then(setLoggedInUser)
  }, [])

  console.log(loggedInUser)
  console.log(contacts)
  return (
    <>
      <Header loggedInUser={loggedInUser}/>
      <Aside />
      <MainComponent />
    </>
  )
}

export default App
