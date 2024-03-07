import { createContext, useEffect, useState } from 'react'
import './App.css'
import PostsList from './components/PostsList'
import { Route, Routes } from 'react-router-dom'
import Post from './components/Post'
import Header from './components/Header'
import NavMenu from './components/NavMenu'

const MyContext = createContext()

function App() {

  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])

  const getPostsFromApi = () => {
    fetch(`https://boolean-api-server.fly.dev/mkmbaran/post`)
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(error => console.error('Error fetching posts: ', error))
  }

  const getContactsFromApi = () => {
    fetch(`https://boolean-api-server.fly.dev/mkmbaran/contact`)
    .then(res => res.json())
    .then(data => setContacts(data))
    .catch(error => console.error('Error fetching contacts: ', error))
  }


  useEffect(() => {
    getPostsFromApi()
    getContactsFromApi()
  },[])

  return (
      <div className='app'>
        <MyContext.Provider value={{posts, setPosts, contacts, setContacts}}>
          <Header/>
          <div className='app-nav-main'>
            <NavMenu/>
            <Routes>
              <Route path="/" element={<PostsList />}/>
              <Route path="/posts/:id" element={<Post />}/>
            </Routes>
          </div>
        </MyContext.Provider>
      </div>
  )
}

export default App;
export {MyContext};
