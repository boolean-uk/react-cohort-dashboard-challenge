import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import SideMenu from "./components/SideMenu";
import HeaderIcon from "./components/icons/HeaderIcon";
//import HeaderIcon from "./components/icons/HeaderIcon";

const Context = createContext()

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/maha897/post")
      .then((response) => response.json())
      .then((data) => setPosts(data.reverse()))
  }, [posts]);

  return (
    <Context.Provider value={{ posts, setPosts }}>
      <div className="app">
        <header className="header">
          <HeaderIcon />
          {/* WANT TO PUT SVG IMAGE HERE*/}
        </header>

        <SideMenu />

        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export { App, Context }
