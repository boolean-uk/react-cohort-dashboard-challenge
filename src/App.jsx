import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './components/Homepage'

import './App.css'

function App() {

  const URL = 'https://boolean-api-server.fly.dev/satokii'

  const [posts, setPosts] = useState([])
  const [shouldGetPosts, setShouldGetPosts] = useState(true)
 
  function getPosts() {
    fetch(`${URL}/post`)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setShouldGetPosts(false)
      })
  }

  useEffect(() => {
    shouldGetPosts && getPosts()
  }, [shouldGetPosts])

  // console.log(posts)

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<HomePage posts={posts} URL={URL} />}
          >
        </Route>
      </Routes>
    </>
  )
}

export default App
