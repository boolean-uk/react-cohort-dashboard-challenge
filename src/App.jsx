import { useState } from 'react'
import './App.css'
import Aside from './components/Aside'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import { useEffect } from 'react'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/MyrtheDullaart/contact/1')
    .then(response => response.json())
    .then(setLoggedInUser)
  }, [])

  return (
    <>
      <Header loggedInUser={loggedInUser}/>
      <Aside />
      <MainComponent loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
    </>
  )
}

export default App
