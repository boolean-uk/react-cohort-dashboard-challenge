import { Route, Routes } from "react-router-dom"
import SinglePostPage from "./components/Main/singlePost"
import { postURL, contactURL, get } from "./components/client"
import { useState, useEffect } from "react"
import LeftMenu from './components/Left-menu/left-menu'
import Header from './components/Header/header'
import Home from "./Pages/home"

export default function App() {

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    get(contactURL)
      .then(data => setUsers(data))

    get(postURL)
      .then(data => setPosts(data))

  }, [])

  return (

    <>
      <div className='main-app-grid'>
        <Header />
        <LeftMenu />
        <Routes>
          <Route
            path='/'
            element={<Home users={users} posts={posts} setPosts={setPosts} />}
          />
          <Route
            path='/post/:postId'
            element={<SinglePostPage 
              users={users} 
              posts={posts} 
              setPosts={setPosts} 
             />}
          />
        </Routes>
      </div>

    </>
  )
}
