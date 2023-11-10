import React from 'react'
import Header from './components/Header/Header'
import Posts from './components/MainPage/CreateAPost/PostSection/Posts'
import CreatePost from './components/MainPage/CreateAPost/CreateAPost'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [contact , setContact] = useState({})

  const userName = "TomEastwood"
  const baseUrl = `https://boolean-api-server.fly.dev/${userName}`
  const endpointForContacts = "/contact"

  useEffect(() => {
    fetch(baseUrl + endpointForContacts)
        .then(res => res.json())
        .then(data => setContact(data))
  }
  , [])

  return (
    <section className = "app">
      <div className = "header">
        <Header 
        />
      </div>
      <div className = "main-section">
        <div className = "create-a-post">
          <CreatePost 
            contact={contact}
          />
        </div>
        <div className = "posts-container">
          <Posts 
          />
        </div>
      </div>
    </section>
  )
}

export default App
