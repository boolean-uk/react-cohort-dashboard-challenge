import { Route, Routes } from 'react-router-dom'
import PostView from './Components/PostView'
import { useEffect, useState, createContext } from 'react'
import Header from './Components/Header'
import ProfilePage from './Components/ProfilePage'
import Side from './Components/Side'
export const AppContext = createContext()
import './App.css'
import Homepage from './Components/HomePage'

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [loggedIn, setLoggedIn] = useState(null)

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/FelixMathiasson/post')
      .then(res => res.json())
      .then((data) => {
        const reversedArray = []
        data.forEach((post) => {
          reversedArray.unshift(post)
        })
        setPosts(reversedArray)
      })
  }, [])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/FelixMathiasson/contact')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  useEffect(() => {
    if(users.length > 0) {
      const u = users.find(u => u.id === 1) 
      if(u) {
        setLoggedIn(u)
      } 
   }
  },[users])

  if(!loggedIn) {
    return <div>Loading</div>
  }

  const updateUsers = () => {
    fetch("https://boolean-uk-api-server.fly.dev/FelixMathiasson/contact")
    .then(response => response.json())
    .then(data => setUsers(data))
  }

  return (
    <>
      <AppContext.Provider value={{ loggedIn, setLoggedIn, users, posts }}>
        <Header/>
        <Side />
          <div>
            <Routes>
              <Route path = '/' element={<Homepage setPosts={setPosts}/>}/>
              <Route path='/post/:id' element={<PostView  setPosts={setPosts}/>}/>
              <Route path='/profile' element={<ProfilePage update={updateUsers}/>}/>
              <Route path='/profile/:id' element={<ProfilePage update={updateUsers}/>}/>
            </Routes>
        </div>
      </AppContext.Provider> 
    </>
  )
}

export default App
