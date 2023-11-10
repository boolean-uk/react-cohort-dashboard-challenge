import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './components/Homepage'

import './App.css'

function App() {

  const URL = 'https://boolean-api-server.fly.dev/satokii'

  const [posts, setPosts] = useState([])
  const [shouldGetPosts, setShouldGetPosts] = useState(true)
  const [loggedInUser, setLoggedInUser] = useState(null)
 
  function getPosts() {
    fetch(`${URL}/post`)
      .then(res => res.json())
      .then(data => {
        setPosts(data.reverse())
        setShouldGetPosts(false)
      })
  }

  useEffect(() => {
    shouldGetPosts && getPosts()
  }, [shouldGetPosts])


  function getLoggedInUser() {
    fetch(`${URL}/contact/1`)
      .then(res => res.json())
      .then(data =>  setLoggedInUser(data))
  }

  useEffect(() => {
    getLoggedInUser()
  }, [])

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<HomePage posts={posts} URL={URL} loggedInUser={loggedInUser} setShouldGetPosts={setShouldGetPosts} />}
          >
        </Route>
      </Routes>
    </>
  )
}

export default App
