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
export const PostContext = createContext()

function App() {

  const [initials, setInitials] = useState('')
  const [posts, setPosts] = useState([])

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
        <PostContext.Provider value={{
          posts: posts,
          setPosts: setPosts
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<ShowOnePost />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </PostContext.Provider>
      </div>
    </NameContext.Provider>
  )
}

export default App
