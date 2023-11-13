import { Route, Routes } from "react-router-dom"


import SinglePostPage from "./components/Main/singlePost"
import { postURL, contactURL, get } from "./components/client"
import { useState, useEffect } from "react"
import Home from "./Pages/home"

function App() {

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    get(contactURL)
    .then(data => setUsers(data))
    
    get(postURL)
    .then(data => setPosts(data))
  
  }, [])
  
  return (

    <>
      
      <Home users={users} posts={posts} />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/post/:id'
          element={<SinglePostPage users={users} posts={posts} />}
        />
      </Routes>
    </>
  )
}

export default App
