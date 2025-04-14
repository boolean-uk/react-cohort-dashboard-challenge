import "./Posts.css";
import { useState, useEffect, useContext } from "react";
import Post from "./Post";
import { NewPostContext } from "./App";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isNewPost] = useContext(NewPostContext);
  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/AtikoSpeed/post")
      .then((response) => response.json())
      .then(setPosts);
  }, [isNewPost]);

  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            posterId={post.contactId}
            postTitle={post.title}
            postText={post.content}
            postId={post.id}
          />
        );
      })}
    </div>
  );
}
