import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Posts from './Components/Posts'
import { Route, Routes, Link } from 'react-router-dom';
import ViewPost from './Components/ViewPost'

function App() {
  const [posts, setPosts] = useState([])

  // const [user, setUser] = useState(null)
    
  // const [comments, setComments] = useState([])
  // const [shouldGetData, setShouldGetData] = useState(true)

  const POSTS_API = 'https://boolean-api-server.fly.dev/ilham-saleh/post'

  const getPosts = () => {
      fetch(POSTS_API)
      .then(res => res.json())
      .then(data => setPosts(data))
  }

  useEffect(() => {
      getPosts()
  }, [])

  // RECENT CHANGE OCCURED HERE 
//   useEffect(() => {
//     fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact/${posts.contactId}`)
//     .then(res => res.json())
//     .then(data => setUser(data))
// }, [])


// const getComments = () => {
//     fetch(`https://boolean-api-server.fly.dev/ilham-saleh/post/${post.id}/comment`)
//     .then(res => res.json())
//     .then(data => setComments(data))
// }

// useEffect(() => {
//     getComments()
// }, [])



  return (
    <>
      <Header />
      <div className="container">
         <SideBar />
      <Routes>
        <Route path='/' element={<Posts posts={posts} setPosts={setPosts} currentUserId="1" getPosts={getPosts}/>}/>
        <Route path='/:id' element={<ViewPost posts={posts} />}/>
      </Routes>
      </div>
    </>
  )
}

export default App
