import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import UserProfile from './Pages/UserProfile/UserProfile'
import PostView from './Pages/Home/PostView/PostView'
const URL = "https://boolean-api-server.fly.dev/thegrevling/post"
export const PostsContext = createContext()

function Dashboard() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(setPosts)
  }, [])

  // useEffect(() => {
  //   console.log(posts)
  // }, [posts])
  return (
    <div className='dashboard-component'>
      <PostsContext.Provider value={posts}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:id' element={<PostView />} />
          <Route path='/profile/' element={<UserProfile />} />
        </Routes>
      </PostsContext.Provider>
    </div>
  )
}

export default Dashboard