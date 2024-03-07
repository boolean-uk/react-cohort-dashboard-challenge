import { useEffect, useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PostFeed from './pages/PostFeed'
import ProfileView from './pages/ProfileView'

const LoggedInUserContext = createContext()
const CohortContext = createContext()

const initialUserState = {firstName:"",lastName:"",gender:"",email:"",jobTitle:"",street:"",city:"",latitude:0,longitude:0,favouriteColour:"",profileImage:"",id:-1}

function App() {
  const [loggedInUser, setLoggedInUser] = useState(initialUserState)

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/AGatland/contact")
    .then(res => res.json())
    .then(data => {setUsers(data); setLoggedInUser(data.find(user => user.id === 1)) })
  }, [])

  // Should probably find a better way to do this: maybe change way to access loggedInUser?
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
          </Routes>
        </CohortContext.Provider>
      </div>
    </LoggedInUserContext.Provider>
  </div>
  )
}

export { LoggedInUserContext, CohortContext, App}
