import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/SideBar'
import Header from './components/Header'
import PostFeed from './components/PostFeed'

function App() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <div className="container">
          <header className="header blue">
            <Header></Header>
          </header>
          <div className="container-nav-main">
            <nav className="sidebar red">
              <Sidebar></Sidebar>
            </nav>
            <main className="main green">
              <PostFeed></PostFeed>
            </main>
          </div>
        </div>
      </body>

    </>
  )
}

export default App
