import { useEffect, useState } from "react";
import PostListItem from "./PostListItem/PostListItem";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/yee0802/post")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(fetchData, []);

  return (
    <div className="post-list-container">
      <ul className="post-list">
        {posts.map((post, idx) => (
          <PostListItem key={idx} post={post} />
        ))}
      </ul>
    </div>
  );
}
