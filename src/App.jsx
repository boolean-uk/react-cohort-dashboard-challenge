import { useState, useEffect, createContext } from 'react'
import { Link, Routes, Route } from "react-router-dom"
import './App.css'
import Header from './components/statics/Header'
import LeftMenu from './components/statics/LeftMenu'
import Posts from './components/Posts/Posts'
export const MetaContext = createContext()

function App() {
  const [contacts, setContacts] = useState([])
  const [posts, setPosts] = useState([])


  // GET
  useEffect(() => {
      getContacts()
      getPosts()
  }, [])

  function getContacts() {
      fetch("https://boolean-api-server.fly.dev/Hjaldrgud/contact")
          .then((response) => response.json())
          .then((data) => setContacts(data))
  }

  function getPosts() {
    fetch("https://boolean-api-server.fly.dev/Hjaldrgud/post")
        .then((response) => response.json())
        .then((data) => setPosts(data))
  }

  //console.log(contacts)
  //console.log(posts)


  //Hardcoded user that is logged in. Dependent on my account. I made myself which has the id of 16.
  const loggedIn = contacts.find(c => c.id === 16)
  console.log(loggedIn)

  /*
  function findLoggedIn() {
    const user = 
    setLoggedIn(user)
  } 
  */

  return (
    <MetaContext.Provider value=
    {{
      contacts: contacts, 
      posts: posts, 
      setPosts: setPosts,
      loggedIn: loggedIn
    }}>

      <Header />
      <div className="app-container">
        <LeftMenu />
        <div className="content">
          {/*<Routes>
            <Route path="/" element={<Posts />} />
          </Routes>*/}
          <Posts />
        </div>
      </div>

    </ MetaContext.Provider>
  )
}

export default App
