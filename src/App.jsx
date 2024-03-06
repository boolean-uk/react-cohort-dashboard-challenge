import { useState, createContext, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Dashboard from "./components/Dashboard";

const DataContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https:boolean-api-server.fly.dev/pkekkonen/post")
      .then((response) => {
        return response.json();
      })
      .then((postData) => {
        setPosts(postData);
      });
  }, []);

  return (
    <body>
      <div className="container">
        <DataContext.Provider value={{ posts, setPosts, user, setUser }}>
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
