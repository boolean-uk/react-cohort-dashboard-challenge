import { useState, useEffect, createContext } from 'react'
import { Route, Routes } from 'react-router-dom';

import './App.css'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Main from './components/Main'
import ViewPost from './components/ViewPost.jsx';
import ProfilePage from './components/ProfilePage.jsx';

const PostContext = createContext()
const ContactContext = createContext()

function App() {
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])

  //Get all posts from API
  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/alexandra7667/post/')
      .then(response => response.json())
      .then((result) => setPosts(result))
  }, [])

  //Get all contacts from API
  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/alexandra7667/contact/')
      .then(response => response.json())
      .then((result) => setContacts(result))
  }, [])

  return (
    <>
      <PostContext.Provider value={{ posts, setPosts }}>
        <ContactContext.Provider value={{ contacts, setContacts }}>

          <div className="container">
            <Header />
            <div className="container-nav-main">
              <Nav />

              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/posts/:id" element={<ViewPost />} />
                <Route path='/profile/:id' element={<ProfilePage/>}></Route>
              </Routes>

            </div>
          </div>

        </ContactContext.Provider>
      </PostContext.Provider>
    </>
  )
}

export { App, PostContext, ContactContext };