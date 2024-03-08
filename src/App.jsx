import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import SideMenu from "./components/SideMenu";
import HeaderIcon from "./components/icons/HeaderIcon";
import PostView from "./components/PostView";
import Avatar from "react-avatar";
import ProfileForm from "./components/ProfileForm";

const Context = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([])
  const [userLoggedIn, setUserLoggedIn] = useState({})

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/maha897/post")
      .then((response) => response.json())
      .then((data) => setPosts(data.reverse()));
  }, [posts]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/maha897/contact")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        setUserLoggedIn(data[9]);
      });
  }, []);

  return (
    <Context.Provider value={{ posts, setPosts, users, setUsers, userLoggedIn }}>
      <div className="app">
        <header className="header">
          <HeaderIcon className="img"/>
          <div className="avatar-container">
            <Avatar className="header-avatar" name={`${userLoggedIn.firstName} ${userLoggedIn.lastName}`} round={true} size={50}/>
          </div>
        </header>
      
        <div className="content">
          <SideMenu />

          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/post/:id" element={<PostView />} />
            <Route path="/profile" element={<ProfileForm />} />
          </Routes>
        </div>
      </div>
    </Context.Provider>
  );
}

export { App, Context };
