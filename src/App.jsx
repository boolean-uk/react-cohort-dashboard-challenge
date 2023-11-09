import Header from './components/Header'
import Aside from './components/Aside'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <Header />
      <Aside />
      <Dashboard />
    </>
  )
}

export default App
