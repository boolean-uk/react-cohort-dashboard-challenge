import { useState, createContext } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'
import Sidebar from './components/Sidebar'
import PostDetails from './components/PostDetails'

import { Route, Routes } from 'react-router-dom'

const MyContext =createContext()

function App() {
  
  const [profile, setProfile] = useState(null)
  const [posts, setPosts] = useState([])

  const loggedInUser = {
    "id": 1,
    "firstName": "Joan",
    "lastName": "Nabuuma",
    "street": "Kintu Lane",
    "city": "Rubaga",
    "gender": "Female",
    "email": "joannabuuma1@gmail.com",
    "jobTitle": "Lawyer",
    "latitude": 42,
    "longitude": 629,
    "favouriteColour": "#0d7f26",
    "profileImage": "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"
  }
  const API_POSTS = "https://boolean-api-server.fly.dev/joannabuuma1/post"
  const API_CONTACTS = "https://boolean-api-server.fly.dev/joannabuuma1/contact"



  return (
    <MyContext.Provider
      value={{
        user: loggedInUser,
        profile: profile,
        setProfile: setProfile,
        API_POSTS: API_POSTS,
        API_CONTACTS: API_CONTACTS,
        posts: posts,
        setPosts: setPosts
      }}>
      <div className="app">
        <header className='header'>
          <Header />
        </header>

        <main className="main">

          <section className='sidebar'>
            <Sidebar />
          </section>

          <section className="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path='/post' element={<PostDetails />} />
            </Routes>
          </section>
        </main>
      </div>
    </MyContext.Provider>
  )
}

export default App
export {MyContext}
