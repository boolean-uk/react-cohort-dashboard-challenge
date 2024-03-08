// App.jsx

import { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Dashboard from './components/Index';
import Profile from './Profile/Index';
import PostList from './components/PostList'; 

const UserContext = createContext();
const PostContext = createContext();

function App() {
  const [activeUser, setActiveUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch("https://boolean-api-server.fly.dev/SanderSaether/contact")
        .then((res) => res.json()),
      fetch("https://boolean-api-server.fly.dev/SanderSaether/post")
        .then((res) => res.json())
    ]).then(([userData, postData]) => {
      setUsers(userData);
      setActiveUser(userData[0]);
      setPosts(postData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <UserContext.Provider value={{ activeUser, setActiveUser, users, setUsers }}>
      <PostContext.Provider value={{ posts, setPosts }}>
        <>
          <Header />
          <SideNav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile/:id" element={<Profile />} />
            {/* Add the route for PostList to handle individual post pages */}
            <Route path="/post/:id" element={<PostList />} />
          </Routes>
        </>
      </PostContext.Provider>
    </UserContext.Provider>
  );
}

export { App, UserContext, PostContext };
