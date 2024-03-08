import { useState, useEffect, createContext } from 'react'
import { Link,Route, Routes } from 'react-router-dom'
import PostList from './components/Dashboard'
import './App.css'
import Header from './components/Header'
import RenderProfile from './components/Profile'
import SpesificPost from './components/SpesificPost'

const AppContext = createContext()

function App() {
  const [contacts, setContacts] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
      fetch("https://boolean-api-server.fly.dev/ThomasKva/post")
        .then(response => response.json())
        .then((data) => setPosts(data.reverse()))
        .catch(error => 
            console.error('Could not fetch data...', error))
      }, [])


  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/ThomasKva/contact")
    .then(response => response.json())
    .then((data) => setContacts(data))
    .catch(error => 
        console.error('Could not fetch data...', error))
    }, [])

  useEffect(() => {
    setLoggedInUser(contacts.find((user) => user.id === 1))
  }, [contacts])

  


  return (
    <>
      <Header loggedInUser={loggedInUser}/>
      <div className='mainbody'>
        <nav className='nav'>
          <div className='home'>
            <Link to={"/"}>
              <img src='src\assets\home-icon.svg'></img>
              <p>Home</p>
            </Link>
          </div>
          <br></br>
          <br></br>
          <div className='profile'>
            <Link to={'/profile'}>
              <img src='src\assets\profile-icon.svg'></img>
              <p>Profile</p>
            </Link>
          </div>
        </nav>

        <main>
        <AppContext.Provider value={{contacts, setContacts, 
            loggedInUser, posts, 
            setPosts, comments, setComments}}>
          <Routes>
            <Route path='/'
              element={<PostList />}/>

            <Route path='/profile'
              element={<RenderProfile/>}/>
              <Route path='/post/:id'
              element={<SpesificPost/>}/>
          </Routes>
        </AppContext.Provider>        
        </main>
      </div>
    </>
  )
}

export { App, AppContext }
