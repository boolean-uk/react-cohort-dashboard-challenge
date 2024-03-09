import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import UserProfile from "./pages/home/components/Profile/Profile";
import PostView from "./pages/View/View";

const URL = "https://boolean-api-server.fly.dev/alexanderell/post";
export const PostsContext = createContext();

function Dashboard() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setPosts(data.reverse());
      } else {
        console.error("Failed to fetch posts");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="dashboard-component">
      <PostsContext.Provider value={{ posts, fetchPosts }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostView />} />
          <Route path="/profile/:id" element={<UserProfile />} />
        </Routes>
      </PostsContext.Provider>
    </div>
  );
}

export default Dashboard;
