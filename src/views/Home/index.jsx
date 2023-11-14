import { useEffect, useState } from "react";
import GeneratePost from "./components/GeneratePost/GeneratePost";
import PostListPage from "./components/PostListPage/PostListPage";

const API_BASE_URL = "https://boolean-api-server.fly.dev";

export default function Home() {
  const [posts, setThePosts] = useState([]);
  const [reload, setReload] = useState(false);

  const getPosts = () => {
    fetch(`${API_BASE_URL}/Hayor4real/post`)
      .then((response) => response.json())
      .then((data) => {
        setThePosts(data);
        setReload(false);
        console.log(data);
      });
  };

  useEffect(getPosts, [reload]);

  return (
    <div className="home__container">
      <GeneratePost setReload={setReload} API_BASE_URL={API_BASE_URL} />
      <PostListPage posts={posts} API_BASE_URL={API_BASE_URL} />
    </div>
  );
}
