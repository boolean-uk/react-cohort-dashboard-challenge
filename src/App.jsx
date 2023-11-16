import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Content from "./components/content/content";
import Post from "./components/content/subcomponents/post";
import { get } from "./components/controller"

const postApi = "https://boolean-api-server.fly.dev/Radio58/post";
const contApi = "https://boolean-api-server.fly.dev/Radio58/contact";



export default function App() {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    get(`${contApi}/1`).then((data) => setUser(data));
  }, []);

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
                user={user}
                posts={posts}
                setPosts={setPosts}
                contacts={contacts}
                setContacts={setContacts}
              />
            }
          />
          <Route
            path="/profile"
            element={<p>profile goes here</p>}
          />
          <Route
            path={"/post/:UID"}
            element={<Post />}
          />
        </Routes>
      </div>
    </>
  );
}
