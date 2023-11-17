import React from 'react'
import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import MakePost from './MakePost/MakePost'
import EachPost from './Posts/EachPost'
import Navigation from './Navigation/Navigation'
import Posts from './Posts/Posts'
import Header from './Header/Header'

function App() {
  
  const [contact , setContact] = useState({})

  const [posts, setPosts] = useState([])

  const contactId = posts.contactId

  const userName = "LAVINIABENZAR"
  const baseUrl = `https://boolean-api-server.fly.dev/${userName}`
  const endpointForContacts = "/contact"
  const endpointForPosts = "/post"

  useEffect(() => {
    fetch(baseUrl + endpointForContacts)
        .then(res => res.json())
        .then(data => setContact(data))
  } , [])

  useEffect(() => {
    fetch(baseUrl + endpointForPosts)
        .then(res => res.json())
        .then(data => setPosts(data))
  } , [])

  return (
   <>
   
   <section className = "app">
    <div className='header'>
      <Header/>
    </div>
  
  <div className = "main-section">
    <aside className = "side-bar">
      <Navigation
      />
    </aside>
    <Routes>
    <Route path="/"
      element={
        <>
        <div className="create-a-post">
          <MakePost
            contact={contact}
            posts={posts}
            setPosts={setPosts}
          />
        </div>
        <div className = "posts-container">
          <Posts
            contact={contact}
            posts={posts}
            contactId={contactId}
          />
        </div>
        </>
      }/>
      <Route path="/post:id"
        element={
        <div className = "single-post">
          <EachPost
            contact={contact}
            posts={posts}
          />
        </div>
        }/>
    </Routes>
  </div>
</section>
   </>
   
  )
}
  


export default App;
