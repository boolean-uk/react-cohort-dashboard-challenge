import { useState, useEffect, createContext } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Profile from './components/Profile';
import Post from './components/Post';
export const AppContext = createContext()

function App() {
  const [posts, setPosts] = useState([])
  const [authors, setAuthors] = useState([])
  const [comments, setComments] = useState([])
  const [user, setUser] = useState(undefined)


  useEffect(() => {
    const getAllPosts = async () => {
      const url = "https://boolean-uk-api-server.fly.dev/tvaltn/post"
      const response = await fetch(url)
      const jsonData = await response.json()
      setPosts(jsonData)
  
      // Also get all comments associated with the post
      const allComments = []
      for (let i = 0; i < jsonData.length; i++) {
        console.log(i, jsonData[i])
        const postComments = await getAllComments(jsonData[i])
        allComments.push(...postComments)
      }
      setComments(allComments)
    }

    const getAllAuthors = async () => {
      const url = "https://boolean-uk-api-server.fly.dev/tvaltn/contact"
      const response = await fetch(url)
      const jsonData = await response.json()
      setAuthors(jsonData)
      // Also just set the current logged in user to be the first one from the get
      setUser(jsonData[0])
    }

    const getAllComments = async (post) => {
      const url = `https://boolean-uk-api-server.fly.dev/tvaltn/post/${post.id}/comment`
      const response = await fetch(url)
      const jsonData = await response.json()
      return jsonData
    }

    getAllPosts()
    getAllAuthors()
  }, [])

  

  return (
    <main className='app'>
      <AppContext.Provider
        value={{ posts: posts, setPosts: setPosts,
                 authors: authors, setAuthors: setAuthors,
                 comments: comments, setComments: setComments,
                 user: user, setUser: setUser}}
      >
        <Header/>
        <Sidebar/>
        <div className="content">
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/post/:id" element={<Post/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/profile/:id" element={<Profile/>} />
          </Routes>
        </div>
      </AppContext.Provider>
    </main>
  )
}

export default App
