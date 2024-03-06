import './App.css'
import { Route, Routes } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import HomePage from './HomePage'
import ViewPostPage from './ViewPostPage'

export const PostContext = createContext()
export const AuthorContext = createContext()

function App() {

  const [posts, setPosts] = useState([])
  const [authors, setAuthors] = useState([])

  // GET the posts
  useEffect(() =>
  {
    fetch("https://boolean-api-server.fly.dev/klaand01/post")
    .then((response) => response.json())
    .then((data) => {
        //console.log("POSTS", data)
        setPosts(data.reverse())
    })
  }, [])

  // GET the authors
  useEffect(() =>
  {
    fetch("https://boolean-api-server.fly.dev/klaand01/contact")
    .then((response) => response.json())
    .then((data) => {
        //console.log("AUTHORS", data)
        setAuthors(data)
    })
  }, [])

  const addPost = (data) =>
  {
    setPosts([data.newPost, ...posts])
  }

  return (
    <>
        <PostContext.Provider value={{posts, addPost}}>
          <AuthorContext.Provider value={{authors}}>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path="/post/:id" element={<ViewPostPage/>}/>
            </Routes>
          </AuthorContext.Provider>
        </PostContext.Provider>
    </>
  )
}

export default App
