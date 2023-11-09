import { useState } from 'react'
import { useNavigation, useParams } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Home from "./components/Home"
import Profile from "./components/Profile"

function App() {
  const navigate = useNavigation()

  return (
    <>
    <header>
      HEADER
    </header>
    <aside>
      ASIDE
    </aside>
    <body>
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
    </body>
    </>
  )
}

export default App
