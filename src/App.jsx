import React from 'react'
import Header from './components/Header/Header'
import Posts from './components/MainPage/CreateAPost/PostSection/Posts'
import Post from './components/MainPage/CreateAPost/PostSection/Post'
import CreatePost from './components/MainPage/CreateAPost/CreateAPost'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {

  const [contact , setContact] = useState({})

  const [posts, setPosts] = useState([])

  const userName = "TomEastwood"
  const baseUrl = `https://boolean-api-server.fly.dev/${userName}`
  const endpointForContacts = "/contact"
  const endpointForPosts = "/post"

  useEffect(() => {
    fetch(baseUrl + endpointForContacts)
        .then(res => res.json())
        .then(data => setContact(data))
  } , [])

  useEffect(() => {
    fetch(baseUrl + endpointForPosts)
        .then(res => res.json())
        .then(data => setPosts(data))
  } , [])

  return (
    <section className = "app">
      <div className = "header">
        <Header 
        />
      </div>
      <div className = "main-section">
        <aside className = "side-bar">
          <Navbar 
          />
        </aside>
        <Routes>
        <Route path="/home"
          element={
            <>
            <div className="create-a-post">
              <CreatePost
                contact={contact}
                posts={posts}
                setPosts={setPosts}
              />
            </div>
            <div className = "posts-container">
              <Posts 
                contact={contact}
                posts={posts}
              />
            </div>
            </>
          }/>
        </Routes>
        <Routes>
          <Route path="/post/:id"
            element={<Post />}
          />
        </Routes>
      </div>
    </section>
  )
}

export default App
