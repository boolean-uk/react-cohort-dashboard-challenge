import { createContext, useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import axios from 'axios'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile';
import ViewPost from './components/ViewPost';

const PostContext = createContext(null) 
const ContactContext = createContext(null) 
const UserContext = createContext(null)

function App() {
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    axios
    .get('https://boolean-uk-api-server.fly.dev/Ic4rus90/post')
    .then(res => {
        const data = res.data;
        setPosts(data.reverse());
      });
    }, [])

  useEffect(() => {
    axios
    .get('https://boolean-uk-api-server.fly.dev/Ic4rus90/contact')
    .then(res => {
      const data = res.data;
      setContacts(data);
      const firstUser = data.find((d) => d.id === 1)
      setUserDetails(firstUser); 
    })
  }, [])


  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <ContactContext.Provider value={{ contacts, setContacts }}>
        <UserContext.Provider value={{ userDetails, setUserDetails}}>
          <header>
            <Header/>
            <Sidebar />
          </header>
          <section className='main-content'>
            <Routes>
              <Route
                path="/"
                element={<Dashboard/>}
              />
              <Route
                path="/profile"
                element={<Profile/>}
                />
              <Route
                path="/post/:id"
                element={<ViewPost />}
                />
              <Route
                path="/profile/:id"
                element={<Profile/>}
                />
            </Routes>
          </section>
        </UserContext.Provider>
      </ContactContext.Provider>
    </PostContext.Provider>
  )
}

export { App, PostContext, ContactContext, UserContext}
