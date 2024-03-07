import './App.css'
import Header from './components/header.jsx'
import SideBar from './components/sideBar.jsx'
import Posts from './components/posts/posts.jsx'
import Profile from './components/profile/profile.jsx'
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
    <div className="container">
      <MyContext.Provider value={{ user: user, baseURL: baseURL }} >
        <Header />
        <div className="container-nav-main">
        <SideBar  />
        <Posts />
      </div>
      </MyContext.Provider>
      <Routes>
        <Route
          path='/'
        />
        <Route
          path='/profile'
          element={<Profile user={user} baseURL={baseURL}/>}
        />
      </Routes>
    </div>
)
}

export { App, MyContext }
