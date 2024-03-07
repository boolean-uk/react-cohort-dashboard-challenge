import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import SideMenu from "./components/SideMenu";
import HeaderIcon from "./components/icons/HeaderIcon";
import PostView from "./components/PostView";

const Context = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/maha897/post")
      .then((response) => response.json())
      .then((data) => setPosts(data.reverse()));
  }, [posts]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/maha897/contact")
      .then((response) => response.json())
      .then(setUsers);
  }, []);

  return (
    <Context.Provider value={{ posts, setPosts, users }}>
      <div className="app">
        <header className="header">
          <HeaderIcon />
        </header>

        <div className="content">
          <SideMenu />

          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/post/:id" element={<PostView />} />
          </Routes>
        </div>
      </div>
    </Context.Provider>
  );
}

export { App, Context };
