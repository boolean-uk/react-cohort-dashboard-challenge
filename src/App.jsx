import './dashboard.css'
import Header from './components/header.jsx'
import SideBar from './components/sideBar.jsx'
import Posts from './components/posts/posts.jsx'
import Profile from './components/profile/profile.jsx'
import ShowPost from './components/posts/showPost.jsx'
import { useEffect, useState, createContext } from 'react'
import { Route, Routes, Link } from 'react-router-dom';

const MyContext = createContext()

function App() {
  const [user, setUser ] = useState([])
  const baseURL = "https://boolean-api-server.fly.dev/Miadog7Extra"

  useEffect(() => {
    fetch(`${baseURL}/contact/1`)
    .then((response) => response.json())
    .then((data) => setUser(data));
    }, [user]);

  return (
    <div className="App">
      <MyContext.Provider value={{ user: user, baseURL: baseURL }} >
        <div className='header'>
        <Header />
        </div>
        <div className="sidebar">
        <SideBar  />
        </div>
        <div className='content'>
      <Routes>
        <Route
          path='/'
          element={<Posts />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='/post/:postId'
          element={<ShowPost />}
          />
        {/* <Route
          path='/profile/Icon'
          element={<ProfileIcon />}
        /> */}
      </Routes>
      </div>
      </MyContext.Provider>
    </div>
)
}

export { App, MyContext }
