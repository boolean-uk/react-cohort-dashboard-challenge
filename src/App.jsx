import { useState } from 'react'
import { useNavigation, useParams } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Home from "./components/Home/Home"
import Profile from "./components/Profile/Profile"

function App() {

  return (
    <div className="container">
      <header>
        HEADER
      </header>
      <aside>
        ASIDE
      </aside>
      <main>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
