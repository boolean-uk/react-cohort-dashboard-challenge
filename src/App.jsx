import { Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Posts from './components/Posts'
import Sidebar from './components/Sidebar'
import { useState, useEffect, createContext } from 'react'
import UserProvider from './contexts/UserContext'

export const AppContext = createContext();

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/giarreh/post')
    .then(response => response.json())
    .then((data) => { setPosts(data) })
  });
  return (
    <UserProvider>
      <AppContext.Provider value={{ posts, setPosts}}>
        <div className="container">
          <Header />
          <div className="container-nav-main">
            <Sidebar />
            <Posts />
          </div>
        </div>
      </AppContext.Provider>
    </UserProvider>
  )
}

export default App
