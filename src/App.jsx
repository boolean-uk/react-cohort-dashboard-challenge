import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
export const AppContext = createContext()
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'
import PostPage from './components/PostPage'

function App() {
  const [user, setUser] = useState(null)
  const [contacts, setContacts] = useState([])
  const [posts, setPosts] = useState([])

  // Get all the contacts
  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/Yumikitsu/contact")
    .then(response => response.json())
    .then(data => setContacts(data))
  }, [])

  // Get the posts
  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/Yumikitsu/post")
    .then(response => response.json())
    .then(data => setPosts(data))
  }, [])

  // Set the user to the contact with id 1
  useEffect(() => {
    const contact = contacts.find(contact => contact.id === 1)

    if(contact) {
        setUser(contact)
    }
  }, [contacts])

  if (!user) {
    return <div>Loading...</div>;
  }

  // Update contacts
  const updateContacts = () => {
    fetch("https://boolean-uk-api-server.fly.dev/Yumikitsu/contact")
    .then(response => response.json())
    .then(data => setContacts(data))
  }


  return (
    <>
    <AppContext.Provider value={{ user, setUser, contacts, posts, setPosts }}>
      <div className="CohortManager">
        <div className="CohortManagerTop">
          {/* Header with Logo + User signed in icon */}
          <Header />
        </div>
        <div className="CohortManagerBottom">
            <div className="CohortSideBar">
              {/* Always Active Sidebar with Home and Profile Icon */}
              <Sidebar />
            </div>
          <div className="CohortContent">
            <main className="CohortMain">
              {/* The Main Contents of the Site */}
              <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/profile/:id' element={<ProfilePage onAction={updateContacts}/>}/>
                <Route path='/post/:id' element={<PostPage />}/>
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </AppContext.Provider>
    </>
  )
}

export default App
