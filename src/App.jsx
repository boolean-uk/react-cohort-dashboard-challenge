import { useState, createContext, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Posts from "./Components/Posts";
import Header from "./Components/Header";

export const AppContext = createContext();

const INITIAL_POSTS = [
  {
    id: 1,
    title: "Inital Post",
    content: "Post content",
    user: "Elias Soprani",
  },
];

export function App() {
  const [posts, setPosts] = useState();
  const loggedInUser = {
    id: 1,
    user: "Elias",
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://boolean-api-server.fly.dev/Eliassoprani/post"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <div className="sidebar">Sidebar</div>
        <div className="main-content">
          <AppContext.Provider
            value={{
              posts: posts,
              setPosts: setPosts,
              loggedInUser: loggedInUser,
            }}
          >
            <Routes>
              <Route path="/" element={<Posts />} />
            </Routes>
          </AppContext.Provider>
        </div>
      </div>
    </>
  );
}
