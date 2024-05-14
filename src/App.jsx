import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './assets/styles/App.css'
import Feed from './components/Feed'
import Header from './components/Header'
import Nav from './components/Nav'
import Post from './components/Post'

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
    <>
      <Header randomAuthor={randomAuthor} />

      <Nav />

      <Routes>
        <Route 
          path='/'
          element={<Feed 
            posts={posts}
            authors={authors}
            loadedPosts={loadedPosts}
            randomAuthor={randomAuthor}
          />}
        />

        <Route 
          path='/:id'
          element={<Post 
              posts={posts} 
              authors={authors}
              randomAuthor={randomAuthor}
            />}
        />
      </Routes>
    </>
  )
}