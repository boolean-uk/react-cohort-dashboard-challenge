import { useState, createContext } from 'react'
import Header from './components/Header'
import LeftSide from './components/LeftSide'
import Body from './components/Body'

import './App.css'

function App() {

  return (
    <div className="main-page">
      <div className="header">
        <Header />
      </div>
      <div className="left-side">
        <LeftSide />
      </div>
      <div className="body">
        <Body />
      </div>
    </div>
  )
}

export default App
