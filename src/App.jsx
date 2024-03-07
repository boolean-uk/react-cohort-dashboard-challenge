import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(0)

  return (
    <div className="container">
    <Header />
    <div className="container-nav-main">
      <Sidebar />
      <main className="main green">
        <div className="yellow"></div>
        <div className="yellow"></div>
        <div className="yellow"></div>
        <div className="yellow"></div>
        <div className="yellow"></div>
      </main>
    </div>
  </div>
  )
}

export default App
