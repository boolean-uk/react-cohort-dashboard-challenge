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
  const [isLoading, setIsLoading] = useState(false) 

  const userName = "oysteinbjo"
  const baseURL = `https://boolean-api-server.fly.dev/${userName}/`

  function getPosts(){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetch(baseURL + 'post').then(data => data.json()))
      })
    }, 1000)
  }

  function getContacts(){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetch(baseURL + 'contact').then(data => data.json()))
      })
    }, 1000)
  }

  useEffect(() => {
    getPosts().then(data => setPosts(data))
    getContacts().then(data => setContacts(data))
    setIsLoading(true)
  }, [])
  
  return (
    <PostContext.Provider value={{
                          posts: posts, 
                          setPosts: setPosts, 
                          contacts:contacts, 
                          setContacts: setContacts,
                          getPosts:getPosts,
                          getContacts: getContacts,
                          isLoading: isLoading
                          }}>
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
