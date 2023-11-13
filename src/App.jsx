import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './app.css'
import { Nav, Feed, Post } from './index'

function App() {

  return (
    <>
      <header>
        <Link to="/"><h1><i className="fa-solid fa-pen-nib"></i> Cohort Manager</h1></Link>
        <p>JW</p>
      </header>
      <main>
        <section className="main">
          <div className="nav-bar"><Nav /></div>
          <Routes>
          <Route path="/" element={<Feed />}></Route>
            <Route path="/" element={<Feed />}></Route>
            <Route path='/post/:postId' element={<Post />}></Route>
          </Routes>

        </section>
      </main>
    </>
  )
}

export default App
