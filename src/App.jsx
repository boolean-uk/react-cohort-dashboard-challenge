import './App.css'
import Header from './components/header.jsx'
import SideBar from './components/sideBar.jsx'
import Posts from './components/posts/posts.jsx'
import { useEffect, useState, createContext } from 'react'

const MyContext = createContext()

function App() {
  const [user, setUser ] = useState([])
  const baseURL = "https://boolean-api-server.fly.dev/Miadog7Extra"

  useEffect(() => {
    fetch(`${baseURL}/contact/2`)
    .then((response) => response.json())
    .then((data) => setUser(data));
    }, []);

  return (
    <div className="container">
      <MyContext.Provider value={{ user: user, baseURL: baseURL }} >
        <Header />
        <div className="container-nav-main">
        <SideBar  />
        <Posts />
      </div>
      </MyContext.Provider>
    </div>
)
  
}

export { App, MyContext }
