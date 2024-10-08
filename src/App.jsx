import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Feed from './Components/Feed/Feed'
import Profile from './Components/Profile'
import PostPage from './Components/Feed/PostPage'
import './styles/App.css'
export const AppContext = createContext();

function App() {
  const [contacts, setContacts] = useState([]);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchContactData = async () => {
      const reponse = await fetch('https://boolean-uk-api-server.fly.dev/siljegja/contact');
      const jsonData = await reponse.json();
      setContacts(jsonData)
    };
    const fetchPostData = async () => {
        const reponse = await fetch('https://boolean-uk-api-server.fly.dev/siljegja/post');
        const jsonData = await reponse.json();
        setPosts(jsonData)
      };
      fetchContactData();
      fetchPostData();
  }, [])

  return (
    <>
      <AppContext.Provider value={{contacts, setContacts, posts, setPosts}}>
        <div className="main-content">
          <Header />
          <div className="content">
            <Navbar />
            <main>
              <Routes>
                <Route path='/' element={<Feed />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/post/:id' element={<PostPage />}/>
             </Routes>
            </main>
          </div>
        </div>
      </AppContext.Provider>
    </>
  )
}

export default App
