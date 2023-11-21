import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Content from "./components/content/content";
import PostPage from "./components/content/subcomponents/postPage";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [activePost, setActivePost] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <>
      <div className="container">
        <Header 
          userInfo={user}
        />
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <Content
                contacts={contacts}
                setContacts={setContacts}
                setActivePost={setActivePost}
                user={user}
                setUser={setUser}
              />}
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
    </>
  );
}
