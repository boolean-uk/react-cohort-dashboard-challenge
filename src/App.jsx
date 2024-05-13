import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './assets/styles/App.css'
import Feed from './components/Feed'
import Header from './components/Header'
import Nav from './components/Nav'

export default function App() {
  const [posts, setPosts] = useState([])
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/post')
        .then(response => response.json())
        .then(setPosts)
  }, [])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact')
      .then(response => response.json())
      .then(setAuthors)
  }, [])

  const randomAuthor = authors[(Math.floor(Math.random() * authors.length))]

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
            randomAuthor={randomAuthor}
          />}
        />
      </Routes>
    </>
  )
}