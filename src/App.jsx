import { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/SideBar'
import Header from './components/Header'
import PostFeed from './components/PostFeed'
import Profile from './components/Profile'
import DetailedPost from './components/PostFeed/components/DetailedPost'

const PostContext = createContext()
const UserContext = createContext()

function App() {
  const [posts, setPosts] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({
    firstName: "Default",
    lastName: "Default"
  })
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  
  console.log(isLoading)
  const fetchPosts = () => {
    setIsLoading(true)
    fetch("https://boolean-api-server.fly.dev/AxelHan/post")
    .then((res) => res.json())
    .then((data) => {
      const idOverNine = []
      data.forEach(element => {
          if(element.id > 9){
            idOverNine.push(element)
          }
      });
      console.log(idOverNine)
      setPosts(idOverNine)
      setIsLoading(false)
    })
  }

  const fetchUser = () => {
    setIsLoading(true)
    fetch(`https://boolean-api-server.fly.dev/AxelHan/contact/1`)
    .then((res) => res.json())
    .then((data) => {
      setLoggedInUser(data)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    fetchPosts()
    fetchUser()
  }, [])

  return (
    <>
      <div className="container">
        <header className='header'>
          <UserContext.Provider value={{loggedInUser: loggedInUser}}>
            <Header></Header>
          </UserContext.Provider>
        </header>
        <div className="container-nav-main">
          <Sidebar></Sidebar>
          <main className="main green">
          {isLoading ? (<p>loading...</p>) : (
            <UserContext.Provider value={{loggedInUser: loggedInUser}}>
            <PostContext.Provider value ={{posts: posts, setPosts: setPosts}}>
            <Routes>
                <Route 
                path="/" 
                element={<PostFeed></PostFeed>}></Route>
                <Route path="/profile" element={<Profile></Profile>}></Route>
                <Route path="post/:id" element={<DetailedPost></DetailedPost>}></Route>
            </Routes>
            </PostContext.Provider> 
            </UserContext.Provider>
          )}  
          </main>
        </div>
      </div>
    </>
  )
}

export {App, PostContext, UserContext};
