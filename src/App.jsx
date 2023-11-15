import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";

import { useEffect, useState } from "react";

import "./App.css";
// import Profile from "./components/Nav-bar/components/Profile";
import NavBar from "./components/Nav-bar/NavBar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
function App() {
  const [posts, setPosts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [shouldGetPost, setShoulGetPost] = useState(true);

  const root = "https://boolean-api-server.fly.dev/aayushlama4008";

  function fetchPost() {
    fetch(`${root}/post`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.reverse());
        setShoulGetPost(false);
      });
  }

  useEffect(() => {
    shouldGetPost && fetchPost();
  }, [shouldGetPost]);
  // console.log(posts)

  const fetchLoggedInUser = () => {
    fetch(`${root}/contact/5`)
      .then((response) => response.json())
      .then((data) => setLoggedInUser(data));
  };

  useEffect(() => {
    fetchLoggedInUser();
  }, []);
  console.log(loggedInUser);

  // console.log(loggedInUser)

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            posts={posts}
            root={root}
            loggedInUser={loggedInUser}
            shouldGetPost={shouldGetPost}
          />
        }
      ></Route>
      <Route
        path="/user-profile"
        element={
          <>
            {" "}
            <Header></Header>
            <NavBar />
            {/* <Main  ></Main> */}
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
