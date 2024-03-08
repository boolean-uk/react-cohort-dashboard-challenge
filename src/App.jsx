import { useState } from 'react'
import './App.css'
import Header from './components/statics/Header'
import LeftMenu from './components/statics/LeftMenu'

function App() {


  return (
    <>
      <Header />
      <div className="app-container">
        <LeftMenu />
        <div className="content">
          <h1>Her ser man masse ting</h1>
          <p></p>
        </div>
      </div>
    </>
  )
}

export default App
