import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import ShowOnePost from './ShowOnePost'
import { createContext, useEffect, useState } from 'react'
import { getAuthor } from './Api'
import Profile from './Profile/Profile'

export const NameContext = createContext()


function App() {

  const [initials, setInitials] = useState('')
  useEffect(() => {
    getAuthor(1).then((author) => {
      setInitials(author.firstName[0] + author.lastName[0])
    })

  }, [])

  return (
    <NameContext.Provider value={{
      initials: initials
    }}>
      <Header />
      <div className='container-nav-main'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<ShowOnePost />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </NameContext.Provider>
  )
}

export default App
