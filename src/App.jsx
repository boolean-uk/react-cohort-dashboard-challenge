import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Router from './components/Router'
import LeftNav from './components/LeftNav'
import './styles/main.css'

function App() {

  return (
    <div className='app-container'>
    <Header/>
    <LeftNav/>
    <div className='body-container'>
      <Router/>

    </div>
    </div>
  )
}

export default App
