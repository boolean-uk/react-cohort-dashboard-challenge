import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import PostDetail from "./Components/PostDetails";
import SideBar from "./Components/SideBar";

function App() {
  //  1. Create a state
  const [posts, setPosts] = useState([]);

  // 3. useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // 2. Fetch post

  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/ps975076/post")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "data");
        setPosts(data);
      });
  };

  const createPost = (content) => {
    if (!content.trim()) return;

    const data = {
      title: "Default title",
      content,
      contactId: 1,
    };
    fetch("https://boolean-api-server.fly.dev/ps975076/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts([data, ...posts]);
      });
  };

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <div className="containerTwo">
          <SideBar />

          <main className="mainContent">
            <Routes>
              <Route
                path="/"
                element={<MainContent posts={posts} createPost={createPost} />}
              />
              <Route path="/:id" element={<PostDetail />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
