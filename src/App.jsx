import { useState, createContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import './styles/main.css'
import AppRouter from './components/AppRouter'

const PostContext = createContext()

function App() {
  const [posts, setPosts] = useState()

  const userName = "oysteinbjo"
  const baseURL = `https://boolean-api-server.fly.dev/${userName}/post`

  async function getPosts() {
    const response = await fetch(baseURL)
    const data = await response.json()
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, [])
  
  return (
    <PostContext.Provider value={{posts: posts, setPosts: setPosts}}>
      <div className='app-container'>
        <Header />
        <LeftNav />
        <div className='body-container'>
          <AppRouter />
        </div>
      </div>
    </PostContext.Provider>
  )
}

export {PostContext, App}
