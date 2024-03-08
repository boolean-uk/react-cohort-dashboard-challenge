import { useState, createContext, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Posts from "./components/posts/Posts.jsx";
import UserPost from "./components/posts/UserPost.jsx";

import "./App.css";
import { Route, Routes } from "react-router-dom";

const MyContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [contacts, setContacts] = useState([]);

  const getUser = () => {
    fetch(`https://boolean-api-server.fly.dev/StevenTPh/contact/1
    `)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  const getContacts = () => {
    fetch(`https://boolean-api-server.fly.dev/StevenTPh/contact
    `)
      .then((response) => response.json())
      .then((data) => setContacts(data));
  };

  const getPosts = () => {
    fetch(`https://boolean-api-server.fly.dev/StevenTPh/post`)
      .then((response) => response.json())
      .then((data) => {
        const reversedData = data.reverse();
        setPosts(reversedData);
      });
  };

  console.log(contacts);
  console.log(posts);

  useEffect(() => {
    getPosts();
    getUser();
    getContacts();
  }, []);

  return (
    <div className="container">
      <MyContext.Provider
        value={{ posts, setPosts, user, setUser, contacts, setContacts }}
      >
        {user && contacts && <Header />}
        {/*Makes sure that the useEffect runs before rendering*/}
        <div className="container-nav-main">
          <Sidebar />
          <main className="main">
            <Routes>
              <Route path="/" element={user && contacts && <Posts />} />
              <Route path="/profile" element={user && <Profile />} />
              <Route path="/view/:id" element={user && <UserPost />} />
            </Routes>
          </main>
        </div>
      </MyContext.Provider>
    </div>
  );
}

export { App, MyContext };
