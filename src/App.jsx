//import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'
import Sidebar from './components/Sidebar'
import PostDetails from './components/PostDetails'

import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
      <div className="app">
        <header className='header'>
          <Header />
        </header>

        <main className="main">

          <section className='sidebar'>
            <Sidebar />
          </section>

          <section className="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path='/post' element={<PostDetails />} />
            </Routes>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
