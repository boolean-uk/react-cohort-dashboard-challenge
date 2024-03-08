import { useEffect, useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PostFeed from './pages/PostFeed'
import ProfileView from './pages/ProfileView'
import Post from './pages/Post'

// Context for logged in user info
const LoggedInUserContext = createContext()
// Context for posts and users states
const CohortContext = createContext()

const initialUserState = {firstName:"",lastName:"",gender:"",email:"",jobTitle:"",street:"",city:"",latitude:0,longitude:0,favouriteColour:"",profileImage:"",id:-1}

function App() {
  const [loggedInUser, setLoggedInUser] = useState(initialUserState)

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  // Fetch users and posts from API
  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/Agatland/contact")
    .then(res => res.json())
    .then(data => {setUsers(data); setLoggedInUser(data.find(user => user.id === 1)) })

    fetch("https://boolean-api-server.fly.dev/Agatland/post")
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  // Updates the logged in user
  useEffect(() => {
    if (users !== undefined && users.length !== 0 && users !== null)
      setLoggedInUser(users.find(user => user.id === 1))
  }, [users])

  return (
    <div className="container">
    <LoggedInUserContext.Provider value={ { loggedInUser: loggedInUser } }>
      <Header />
      <div className="container-nav-main">
        <Sidebar />
        <CohortContext.Provider value={ { users: users, posts: posts, setUsers: setUsers, setPosts: setPosts } }>
          <Routes>
              <Route path="/" element={<PostFeed />} />
              <Route path="/profile/:id" element={<ProfileView />} />
              <Route path="/post/:id" element={<Post />} />
          </Routes>
        </CohortContext.Provider>
      </div>
    </LoggedInUserContext.Provider>
  </div>
  )
}

export { LoggedInUserContext, CohortContext, App}
