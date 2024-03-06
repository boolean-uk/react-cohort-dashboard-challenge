import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import SideMenu from "./components/SideMenu";

const Context = createContext()

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/maha897/post")
      .then((response) => response.json())
      .then(setPosts);
  }, [posts]);

  return (
    <Context.Provider value={ { posts, setPosts } }>

      <div className="app">
        <header className="header">
          <h1>Cohort Manager</h1>
          {/* TODO add user avatar and logo */}
        </header>

        <SideMenu />

        <Routes>
          <Route 
            path='/'
            element={<Feed />} 
          />
        </Routes>
      </div> 
    </Context.Provider>
  );
}

export { App, Context }
