import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Content from "./components/content/content";
import Post from "./components/content/subcomponents/post";
import PostPage from "./components/content/subcomponents/postPage";
import { get } from "./components/controller"

const contApi = "https://boolean-api-server.fly.dev/Radio58/contact";




export default function App() {
  const [contacts, setContacts] = useState([]);
  const [activePost, setActivePost] = useState([]);


  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <Content
                contacts={contacts}
                setContacts={setContacts}
                setActivePost={setActivePost}
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
