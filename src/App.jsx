import { Route, Routes } from "react-router-dom"
import SinglePostPage from "./Components/Main/singlePost"
import { useState, useEffect, createContext } from "react"
import { postURL, contactURL, get } from "./Components/client"
import LeftMenu from "./Components/Left-menu/left-menu"
import Header from "./Components/Header/header"
import Home from "../src/Pages/home"

const UserAndPostContext = createContext()

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    get(contactURL)
      .then(data => setUsers(data))

    get(postURL)
      .then(data => setPosts(data))

  }, [])


  if (!posts || !users) {
    return <p>...Loading</p>
  }
  return (

    <UserAndPostContext.Provider value={{ users, posts, setPosts }}>
      <div className='main-app-grid'>
        <Header />
        <LeftMenu />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/post/:postId'
            element={<SinglePostPage />}
          />
        </Routes>
      </div>
    </UserAndPostContext.Provider>
  )
}

export { App, UserAndPostContext }