import { useEffect, useState } from "react";
import Post from "./Post";
import { useLocation } from "react-router-dom";
import "./Posts.css";

export default function SinglePost() {
  const postId = useLocation();
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/AtikoSpeed${postId.pathname}`)
      .then((response) => response.json())
      .then(setPost);
  }, [postId]);
  if (post) {
    return (
      <main>
        <Post
          posterId={post.contactId}
          postTitle={post.title}
          postText={post.content}
          postId={post.id}
        />
      </main>
    );
  }
}
