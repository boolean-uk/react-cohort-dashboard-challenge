import { useState, createContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import './styles/main.css'
import AppRouter from './components/AppRouter'

const PostContext = createContext()

function App() {
  const [posts, setPosts] = useState()
  const [contacts, setContacts] = useState()

  const userName = "oysteinbjo"
  const baseURL = `https://boolean-api-server.fly.dev/${userName}/`

  async function getPosts() {
    const response = await fetch(baseURL + 'post')
    const data = await response.json()
    setPosts(data)
  }

  async function getContacts() {
    const response = await fetch(baseURL + 'contact')
    const data = await response.json()
    setContacts(data)
  }

  useEffect(() => {
    getPosts()
    getContacts()
  }, [])
  
  return (
    <PostContext.Provider value={{
                          posts: posts, 
                          setPosts: setPosts, 
                          contacts:contacts, 
                          setContacts: setContacts}}>
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
