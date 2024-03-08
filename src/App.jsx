import { useState, createContext, useEffect } from 'react'
import Header from './components/Header'
import ContainerMainNav from './components/ContainerMainNav'
import './App.css'

const AppDataContext = createContext()

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  
  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/RobinKaastrup/contact')
    .then(res => res.json())
    .then(setUsers)
  },[])
  
  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/RobinKaastrup/contact')
    .then(res => res.json())
    .then(setUsers)
  }, [posts.length])

  const currentUser = users[0]
  


  return (
    <>
      <AppDataContext.Provider value={ {currentUser, users, setUsers, posts, setPosts} } >
        <Header />
        <ContainerMainNav />
      </AppDataContext.Provider>
    </>
  )
}

export {App, AppDataContext}
