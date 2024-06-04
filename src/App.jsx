import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import ViewPost from './components/ViewPost'
import ProfilePage from './components/ProfilePage'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
    
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/Alistair1080/post')
      .then(res => res.json())
      .then((data) => {
        const reversedArray = []
        data.forEach((post) => {
          reversedArray.unshift(post)
        })
        setPosts(reversedArray)
      })
  }, [])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/Alistair1080/contact')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <>
      <Header users={users} />
      <SideBar />
      
      <Routes>
        <Route path="/" element={<HomePage posts={posts} users={users} setPosts={setPosts}/>} />
        <Route path="/post/:id" element={<ViewPost users={users} posts={posts} setPosts={setPosts}/>} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App
