import React, { useContext } from "react";
import { AppContext } from "../App";
import Post from "./Post";
import CreatePost from "./CreatePost";


function PostList() {
  const { posts, setPosts } = useContext(AppContext);

  const reversePost = [...posts].reverse();
  return (
    <main className="post-list">
      <div>
        <CreatePost />
      </div>

      {reversePost.map((item, index) => (
        <Post key={index} post={item}  />
      ))}
    </main>
  );
}

export default PostList;
