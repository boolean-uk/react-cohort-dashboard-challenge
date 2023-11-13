import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './components/Homepage'
import Profile from './components/Profile'
import Header from './components/Header'
import Navigation from './components/Navigation'

import './App.css'

function App() {

  const URL = 'https://boolean-api-server.fly.dev/satokii'

  const [posts, setPosts] = useState([])
  const [shouldGetPosts, setShouldGetPosts] = useState(true)
  const [loggedInUser, setLoggedInUser] = useState(null)
 
  const [currentSelect, setCurrentSelect] = useState('home')

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

  if (!loggedInUser) return <p>Loading...</p>
  const loggedInUserInitials = loggedInUser.firstName.slice(0, 1) + loggedInUser.lastName.slice(0, 1)

  return (
    <div className="container grid">
        <Header loggedInUserInitials={loggedInUserInitials} />
        <Navigation currentSelect={currentSelect} setCurrentSelect={setCurrentSelect} />      
        <Routes>
            <Route
              path='/'
              element={<HomePage posts={posts} URL={URL} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} setShouldGetPosts={setShouldGetPosts} currentSelect={currentSelect} setCurrentSelect={setCurrentSelect} />}
              >
            </Route>
            <Route
              path='/profile'
              element={<Profile loggedInUserInitials={loggedInUserInitials} currentSelect={currentSelect} setCurrentSelect={setCurrentSelect} />}
            />
            <Route
              path='/post/:postId'
            />
        </Routes>
    </div>
  )
}

export default App
