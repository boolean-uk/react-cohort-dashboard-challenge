import { createContext, useState, useEffect } from 'react'
import './App.css'
import Header from './Header/Header';
import Dashboard from './Dashboard';

const PostContext = createContext()

function App() {

  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/svennas/post")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/svennas/contact")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <body>
      <div className="container">
        <Header />

        <div className="container-nav-main">
          <nav className="sidebar">Sidebar</nav>
          <PostContext.Provider value={{ posts, setPosts, users }}>
            <Dashboard />
          </PostContext.Provider>
        </div>
      </div>
    </body>
  );
}

export { App, PostContext };
