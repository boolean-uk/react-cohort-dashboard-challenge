import { Route, Routes } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import './assets/styles/App.css'
import Feed from './components/Feed'
import Header from './components/Header'
import Nav from './components/Nav'
import Post from './components/Post'
import AuthorProfile from './components/AuthorProfile'
import UpdatePost from './components/UpdatePost'

export const StateContext = createContext()

export default function App() {
  const [posts, setPosts] = useState([])
  const [authors, setAuthors] = useState([])
  const [randomAuthor, setRandomAuthor] = useState(null)

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/post')
      .then(response => response.json())
      .then(setPosts)

    fetch('https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact')
      .then(response => response.json())
      .then(setAuthors)
  }, [])

  useEffect(() => {
    if (authors.length > 0) {
      const randomAuthorIndex = Math.floor(Math.random() * authors.length)
      setRandomAuthor(authors[randomAuthorIndex])
    }
  }, [authors])

  const loadedPosts = () => {
    fetch('https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/post')
      .then(response => response.json())
      .then(setPosts)
  }

  return (
    <StateContext.Provider value={ { posts, authors, loadedPosts, randomAuthor, setAuthors } }>
      <Header />

      <Nav />

      <Routes>
        <Route 
          path='/'
          element={<Feed />}
        />

        <Route 
          path='/post/:id'
          element={<Post />}
        />

        <Route 
          path='/contact/:id'
          element={<AuthorProfile />}
        />

        <Route 
          path='/post/update/:id'
          element={<UpdatePost />}
        />
      </Routes>
    </StateContext.Provider>
  )
}