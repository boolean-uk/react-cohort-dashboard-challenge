import { useState, createContext, useEffect } from 'react'
import './App.css'
import DashBoard from './componets/DashBoard'
import { Routes, Route } from 'react-router-dom'
import Profile from './componets/Profile'
import SideBar from './componets/SideBar'
import PostView from './componets/PostView'
import PageHeader from './componets/PageHeader'
export const LoginContext = createContext()
export const UsersContext = createContext()
export const PostContext = createContext()

function App() {
  const userLogin = {
    firstName: "Duane",
    lastName: "Abernathy",
    gender: "FTM",
    email: "Nolan.Hermiston@hotmail.com",
    jobTitle: "International Program Agent",
    street: "Jerde Circles",
    city: "New Verner",
    latitude: -89.6912,
    longitude: -5.6625,
    favouriteColour: "#13672b",
    profileImage: "https://www.gravatar.com/avatar/Nolan.Hermiston@hotmail.com?s=120&d=identicon",
    id: 1
  }
  const [user, setUser] = useState(userLogin)
  const [people, setPeople] = useState([])
  const [posts, setPosts] = useState([])

  const fetchUser = async () => {
    await fetch("https://boolean-uk-api-server.fly.dev/danielmjosroli/contact/1").then(Response => {
      if(Response.ok){
        return Response.json()
      }
      throw Response
      }).then(data => {
        setUser(data)
      }).catch(error => {
        console.error("Error fetching data: ", error)
      })
  }

  const fetchPeople = () => {
    fetch("https://boolean-uk-api-server.fly.dev/danielmjosroli/contact").then(Response => {
      if(Response.ok){
        return Response.json()
      }
      throw Response
  
      }).then(data => {
        setPeople(data)
      }).catch(error => {
        console.error("Error fetching data: ", error)
      })
  }
  const fetchPosts = () => {
    fetch("https://boolean-uk-api-server.fly.dev/danielmjosroli/post").then(Response => {
      if(Response.ok){
        return Response.json()
      }
      throw Response
  
      }).then(data => {
        sortPosts(data)
      }).catch(error => {
        console.error("Error fetching data: ", error)
      })
  }
  const sortPosts = (data) => {
    setPosts(data.sort((a, b) => b.id - a.id))
  }

  useEffect(() => {
      fetchPeople()
      fetchPosts()
      fetchUser()
    }, [])
  return (
    <div className='layout'>
      <LoginContext.Provider
        value={{ user: user}}
      >
      <UsersContext.Provider 
        value={{ users: people}}
      >
        <PostContext.Provider
          value={{ posts: posts, fetchPosts: fetchPosts }}
        >
          <PageHeader/>
          <SideBar/>
          <div className='content'>
            <Routes>
              <Route path='/' element={<DashBoard/>}/>
              <Route path='/:postid' element={<PostView/>} />
              <Route path='/profile/:id' element={<Profile/>}/>  
            </Routes> 
          </div>
        </PostContext.Provider>
      </UsersContext.Provider>
      </LoginContext.Provider>
    </div>
  )
}

export default App
