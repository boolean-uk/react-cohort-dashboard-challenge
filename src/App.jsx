import './App.css'
import { Route, Routes } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import HomePage from './HomePage'
import ViewPostPage from './ViewPostPage'

export const AddPostContext = createContext()

function App() {

  const [posts, setPosts] = useState([])

    useEffect(() =>
    {
      fetch("https://boolean-api-server.fly.dev/klaand01/post")
      .then((response) => response.json())
      .then((data) => {
          //console.log("DATA", data)
          setPosts(data.reverse())
      })
    }, [])

    const addPost = (data) =>
    {
      setPosts([data.newPost, ...posts])
    }

  return (
    <>
      <AddPostContext.Provider value={{addPost}}>
        <Routes>
          <Route path='/' element={<HomePage posts={posts}/>} />
          <Route path="/post/:id" element={<ViewPostPage posts={posts}/>}/>
        </Routes>
      </AddPostContext.Provider>
    </>
  )
}

export default App
