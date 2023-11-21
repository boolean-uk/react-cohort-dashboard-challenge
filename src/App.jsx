import { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Content from "./components/content/content";
import PostPage from "./components/content/subcomponents/postPage";

export const appContext = createContext()

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [activePost, setActivePost] = useState([]);
  const [user, setUser] = useState(null);
  

  return (
    <>
    <appContext.Provider value={{ contacts, setContacts, setActivePost, user, setUser }}>
      <div className="container">
        <Header 
          userInfo={user}
          />
        <Menu />
        <Routes>
          <Route
            path="/"
            element={<Content/>}
          />
          <Route
            path="/profile"
            element={<p>profile goes here</p>}
            />
          <Route
            path={"/post/:PID"}
            element={
              <PostPage
              activePost={activePost}
              contacts={contacts}
              />}
              />
        </Routes>
      </div>
    </appContext.Provider>
    </>
  );
}
