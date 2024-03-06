import './App.css'
import { Route, Routes } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import HomePage from './HomePage'
import ViewPostPage from './ViewPostPage'
import ProfilePage from './ProfilePage'
import EditPostPage from './EditPostPage'

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
        console.log("POSTS", data)
        setPosts(data.reverse())
    })
  }, [])

  // GET the authors
  useEffect(() =>
  {
    fetch("https://boolean-api-server.fly.dev/klaand01/contact")
    .then((response) => response.json())
    .then((data) => {
        setAuthors(data)
    })
  }, [])

  // POST functions
  const addPost = (data) =>
  {
    setPosts([data.newPost, ...posts])
  }

  const editPost = (data) =>
  {
    const tmpPosts = posts.map((post) =>
    {
      if (post.id === data.updatedPost.id) return data.updatedPost
      return post
    })

    setPosts(tmpPosts)
  }

  const deletePost = (data) =>
  {
    const tmpPosts = posts.filter((post) =>
    {
      if (post.id !== data.post.id) return post
    })

    console.log("POSTS LEFT", tmpPosts)
    setPosts(tmpPosts)
  }


  // Author functions
  const editAuthor = (data) =>
  {
    const tmpAuthors = authors.map((author) =>
    {
      if (author.id === data.newAuthor.id) return data.newAuthor
      return author
    })

    setAuthors(tmpAuthors)
  }

  return (
    <>
      <PostContext.Provider value={{posts, addPost, editPost, deletePost}}>
        <AuthorContext.Provider value={{authors, editAuthor}}>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path="/post/:id" element={<ViewPostPage/>}/>
            <Route path="/editPost/:id" element={<EditPostPage/>}/>
            <Route path="/user/:id" element={<ProfilePage/>}/>
          </Routes>
        </AuthorContext.Provider>
      </PostContext.Provider>
    </>
  )
}

export default App
