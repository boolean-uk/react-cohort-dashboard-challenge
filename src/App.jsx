import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
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
        console.log(data, "data");
        setPosts(data);
      });
  };

  return (
    <div className="container">
      <Header />
      <div className="containerTwo">
        <SideBar />
        <MainContent posts={posts} />
      </div>
    </div>
  );
}

export default App;
