import { useState, createContext, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Dashboard from "./components/Dashboard";
import { Link, Route, Routes } from "react-router-dom";
import ViewPost from "./components/DashboardComponents/ViewPost";

const DataContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/pkekkonen/contact")
      .then((response) => {
        return response.json();
      })
      .then((userData) => {
        setUsers(userData);

        // Get user data
        fetch("https:boolean-api-server.fly.dev/pkekkonen/post")
          .then((response) => {
            return response.json();
          })
          .then((postData) => {
            const postDataWithUsers = postData.map((data) => ({
              ...data,
              user: userData.find((u) => u.id === data.contactId),
            }));

            setUser(userData[3]); //TODO: fix so not hardcoded
            setPosts(postDataWithUsers);
          });
      });
  }, []);

  return (
    <>
      <DataContext.Provider value={{ posts, setPosts, user, setUser, users }}>
          <div className="container">
            <Header />
            <div className="container-nav-main">
              <LeftMenu />

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/view/:id" element={<ViewPost />} />
              </Routes>
            </div>
          </div>
      </DataContext.Provider>
    </>
  );
}

export { App, DataContext };
