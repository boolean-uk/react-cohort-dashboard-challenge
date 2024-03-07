import { createContext, useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Header from './Header';
import Dashboard from './Dashboard';
import ShowPost from './Dashboard/components/ShowPost';
import LeftMenu from './LeftMenu';

const PostContext = createContext()
const UserContext = createContext();

function App() {
  const mainUserId = 1

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
      <PostContext.Provider value={{ posts, setPosts }}>
        <UserContext.Provider value={{ users, setUsers, mainUserId }}>
          <div className="container">
            <Header />

            <div className="container-nav-main">
              <LeftMenu />

              <Routes>
                <Route path="/view_post/:id" element={<ShowPost />} />
                <Route exact path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </UserContext.Provider>
      </PostContext.Provider>
    </body>
  );
}

export { App, PostContext, UserContext };
