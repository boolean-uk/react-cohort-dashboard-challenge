import React, { useState, createContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Posts from "./Components/Posts";
import Header from "./Components/Header";

export const AppContext = createContext();

const INITIAL_COMMENTS = [
  {
    id: 1,
    user: "Alex Niklasson",
    content: "Cool post",
    post_id: 1,
  },
  {
    id: 2,
    user: "André Sturesson",
    content: "Yes I agree with Alex. This is a cool post",
    post_id: 1,
  },
];
const INITIAL_POSTS = [
  {
    id: 1,
    title: "Inital Post",
    content: "Post content",
    user: "Elias Soprani",
    comments: INITIAL_COMMENTS,
  },
];

export function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const loggedInUser = {
    id: 1,
    user: "Elias",
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
