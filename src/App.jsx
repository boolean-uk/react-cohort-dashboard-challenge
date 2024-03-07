import { useState, createContext, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Dashboard from "./components/Dashboard";

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
    <body>
      <div className="container">
        <DataContext.Provider value={{ posts, setPosts, user, setUser, users }}>
          <Header />
          <div className="container-nav-main">
            <LeftMenu />
            <Dashboard />
          </div>
        </DataContext.Provider>
      </div>
    </body>
  );
}

export { App, DataContext };
