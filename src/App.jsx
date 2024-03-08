import { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import PostView from "./Components/Dashboard/PostView";
import { Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile";

const AppContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/maritmoe/post`)
      .then((response) => response.json())
      .then(setPosts);
  }, []);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/maritmoe/contact`)
      .then((response) => response.json())
      .then(setUsers);
  }, []);

  useEffect(() => {
    setCurrentUser(users.find((user) => user.id === 1));
  }, [users]);

  return (
    <>
      <AppContext.Provider value={{ posts, setPosts, users, currentUser }}>
        <div className="container">
          <Header />
          <div className="container-nav-main">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<PostView />} />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export { App, AppContext };
