import { useEffect, useState } from "react";
import "./App.css";
import Header from "./assets/Header";
import LeftMenu from "./assets/LeftMenu";
import "./index.css";
import ContentFeed from "./assets/ContentFeed";
import { createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostPage from "./assets/PostPage";
import HomePage from "./assets/HomePage";

const FeedContext = createContext();

function App() {
  //Setting the singed in user to contact id 1 as default.
  const signedInUsrId = 1;
  const [signedInUsr, setSignedInUsr] = useState();
  const [posts, setPosts] = useState([]);


  const fetchAllPosts = async () => {
    const response = await fetch(
      "https://boolean-uk-api-server.fly.dev/LudwigJL/post"
    );
    const data = await response.json();
    setPosts(data);
  };

  const fetchSignedInUsr = async () => {
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/LudwigJL/contact/${signedInUsrId}`
    );
    const data = await response.json();
    setSignedInUsr(data);
  };

  useEffect(() => {
    fetchAllPosts();
    fetchSignedInUsr();
  }, []);

  console.log(posts);
  console.log(signedInUsr);

  return (
    <>
      <FeedContext.Provider value={{ posts, setPosts, signedInUsr }}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path="/posts/:id" element={<PostPage />}></Route>
        </Routes>
      </FeedContext.Provider>
    </>
  );
}

export { App, FeedContext };
