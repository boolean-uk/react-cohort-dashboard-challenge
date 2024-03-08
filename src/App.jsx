import { useState, createContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import MainHome from './components/MainHome'

import './App.css'
import ViewPost from './components/ViewPost'

const AppDataContext = createContext()

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/RobinKaastrup/contact')
    .then(res => res.json())
    .then(setUsers)
  },[])
  


  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/RobinKaastrup/contact')
    .then(res => res.json())
    .then(setUsers)
  }, [posts.length])

  const currentUser = users[0] 
  
  return (
    <AppDataContext.Provider value={ {currentUser, users, setUsers, posts, setPosts} } >
      <Header />
      <div className='container-nav-main'>
        <LeftNav />
        <Routes>
          <Route path='/' element={<MainHome />} />
          <Route path='post/:id' element={<ViewPost />} />

        </Routes>

      </div>
    </AppDataContext.Provider>
  )
}

export {App, AppDataContext}
