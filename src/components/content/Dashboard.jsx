import { useEffect, useState } from "react";

import CreatePost from "./CreatePost";
import Post from "./Post";
import { PostsUrlBase } from "../../util/api";
import { PostsContext } from "../Contexts";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    updatePosts();
  }, []);

  const updatePosts = () => {
    fetch(PostsUrlBase)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch posts.");
        }
        return res.json();
      })
      .then((data) => {
        data.sort((a, b) => b.id - a.id);
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <PostsContext.Provider value={{ posts, setPosts, updatePosts }}>
      <CreatePost />
      {posts.map((post) => {
        return <Post key={post.id} foundPost={post} />;
      })}
    </PostsContext.Provider>
  );
}
