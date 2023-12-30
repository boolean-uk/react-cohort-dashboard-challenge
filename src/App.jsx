import { useState } from 'react'
import Home from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
import React from 'react';
import { useEffect } from 'react';
import Post from './components/Post';
import ReactDOM from 'react-dom';
import './App.css'

function App() {

  const [posts, setPosts] = useState([])

  const POSTS_API = 'https://boolean-api-server.fly.dev/Atiq07/post'

  const getPosts = () => {
      fetch(POSTS_API)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
    <div className="App">
    <Home posts={posts}/>



     
    </div>
    </>
  )
}
export default App;
