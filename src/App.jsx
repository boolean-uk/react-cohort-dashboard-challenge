import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import user from "./assets/data/user";

const API_URL = "https://boolean-api-server.fly.dev/ssuihko/";

function App() {
  const [contacts, setContacts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [viewPost, setViewPost] = useState([]);

  const navigate = useNavigate();

  // call data
  useState(() => {
    fetch(API_URL + "contact")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
        console.log(data);
      });
  }, []);

  useState(() => {
    fetch(API_URL + "post")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      });
  }, []);

  const findPost = (id) => {
    setViewPost([]);
    const postById = posts.find((x) => parseInt(x.id) === parseInt(id));
    console.log("postByID: ", postById);
    setViewPost([{ ...postById }]);
    console.log("viewPostsLenght: ", viewPost.length);
  };

  return (
    <div className="app-content">
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              posts={posts}
              setPosts={setPosts}
              contacts={contacts}
              findPost={findPost}
            />
          }
        />
        <Route
          path="/post/:id"
          element={
            <Dashboard
              posts={viewPost}
              setPosts={setPosts}
              contacts={contacts}
              findPost={findPost}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
