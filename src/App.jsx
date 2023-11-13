import { useState } from 'react'
import { useNavigation, useParams } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Home from "./components/Home/Home"
import Profile from "./components/Profile/Profile"
import SinglePostPage from './components/Post/SinglePostPage'
import Users from './components/Profile/Users'
import Aside from './components/Aside'
import Header from './components/Header'

function App() {

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <aside>
        <Routes>
          <Route 
            path="/"
            element={<Aside activeTab={"Home"}/>}
          />
          <Route 
            path="/post/:id"
            element={<Aside activeTab={"SinglePost"}/>}
          />
          <Route 
            path="/profile"
            element={<Aside activeTab={"Profile"}/>}
          />
        </Routes>
      </aside>
      <main>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route
            path="/post/:id"
            element={<SinglePostPage />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/users"
            element={<Users />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
