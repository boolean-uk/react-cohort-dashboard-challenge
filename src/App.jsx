import './App.css'
import Header from './components/Header'
import Posts from './components/Posts'
import Sidebar from './components/Sidebar'
import { useState, useEffect, createContext } from 'react'

export const AppContext = createContext();

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/giarreh/post')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .then(console.log(posts))
  }, [])

  return (
    <AppContext.Provider value={{ posts, setPosts }}>
    <div className="App">
      <div className="container">
        <div>
          <Header />
        </div>
        <div className="container-nav-main">
          <Sidebar />
          <Posts />
        </div>
      </div>
    </div>
    </AppContext.Provider>
  )
}

export default App
