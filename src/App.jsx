import { createContext, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./assets/components/Header/Header"
import LeftMenu from './assets/components/LeftMenu/LeftMenu'
import CreatePost from './assets/components/CreatePost/CreatePost'
import Post from './assets/components/Feed/Post'
import Home from './assets/components/Feed/Home'
import Profile from './assets/components/Profile/Profile'
import { Routes, Route } from 'react-router-dom'
import { GetAllPosts } from './assets/APIs/PostAPI'
import { GetAllUsers, GetUserById } from './assets/APIs/UserAPI'
import SpecificPost from './assets/components/Feed/SpecificPost'

export const AppContext = createContext()

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState("")
  const username = "thomaafl"

  const fetchPosts = async () => {
    try {
      const result = await GetAllPosts(username)
      setPosts(result.reverse())
      //console.log(result)
    } catch (error) {
      console.error("Error fetching posts: " + error)
    }
  }

  const fetchUsers = async () => {
    try {
      const result = await GetAllUsers(username)
      setUsers(result)
      //console.log(result)
    } catch (error) {
      console.error("Error fetching posts: " + error)
    }
  }

  const fetchLoggedInUser = async () => {
    try {
      const result = await GetUserById(username, 1)
      setLoggedInUser(result)
    } catch (error) {
      console.error("Error fetching user: " + error)
    }
  }




  useEffect(() => {
    fetchPosts()
    fetchUsers()
    fetchLoggedInUser()
  }, [loggedInUser])


  if(!loggedInUser) {
    return <p>Loading ....</p>
  
  }
  return (
    <AppContext.Provider value = {{posts, setPosts, users, setUsers, loggedInUser, setLoggedInUser}}>
      <div className="root-container">
        <Header />
        <div className="row-container">
          <LeftMenu />

          <div className="feed-container">
           
            <Routes>
              <Route path ="/" element = {<Home />}/>
              <Route path ="/profile" element = {<Profile />}/>
              <Route path="/post/:id" element={<SpecificPost />} />
              
            </Routes>


          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
