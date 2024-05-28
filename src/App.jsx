import './App.css'
import { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Post from './Components/Post/Post'
import Main from './Components/Main/MainSection'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'


// Create contexts for managing the users datas and the post data.
export const UserContext = createContext()
export const PostContext = createContext()
export const NavContext = createContext()


function App() {
  // initialising states with hooks to manage user, posts data and navigation item.
  const [user, setUser] = useState(null) //indicating users data is not avaiblable.
  const [posts, setPosts] = useState([]) //empty array to stor lists of posts fetched fro API
  const [navActive, setNavActive] = useState("Home") //set to home page as this is active navigation item 

  // function to fetch data from API. 
  function getPosts() {
    fetch('https://boolean-api-server.fly.dev/Shaun-Harris/post') //fetch from
    .then((response) => response.json()) //handle the response form fetch
    .then((json) => setPosts([...json])) //convert it to JSON format to handle data within the App
  }

  //hook to fetch post data when compnent mount. Defining effect to fetch posts data 
  useEffect(() => {
    getPosts()
  }, [])

  // hook to fetch users data. 
  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/Shaun-Harris/contact/1/')
    .then((response) => response.json())
    .then((json) =>  {
      console.log("Fetched user:", json) 
      setUser({...json})
    })
  }, [])
  
  //return and render the components and passing down the props.
  // provide user data through UserContext, Provide post data and function through PostContext.
  //render Header, NavBar (with navigation), Define routes, Render Main (homepage) and Post(individual posts).
  return (
    <UserContext.Provider value={{ user }}>
      <PostContext.Provider value={{ posts, setPosts, getPosts }}>
        <Header />
        <NavBar active={navActive} setActive={setNavActive}/>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </PostContext.Provider>
    </UserContext.Provider>
  )
}

export default App
