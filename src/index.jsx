import { useEffect, useState } from "react";
import ComposePost from "./components/ComposePost/Composepost";
import Postpage from "./components/Postpage/Postpage";

const API_BASE_URL = "https://boolean-api-server.fly.dev";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getPosts = () => {
    fetch(`${API_BASE_URL}/Elizabethcodes44/post`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setRefresh(false);
        console.log(data);
      });
  };

  useEffect(getPosts, [refresh]);

  return (
    <div className="home">
      <ComposePost setRefresh={setRefresh} API_BASE_URL={API_BASE_URL} />
      <Postpage posts={posts} API_BASE_URL={API_BASE_URL} />
    </div>
  );
}