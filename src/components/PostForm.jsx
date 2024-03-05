import { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorageState from "use-local-storage-state";
import Post from "./Post";

const PostForm = () => {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useLocalStorageState("posts", []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://boolean-api-server.fly.dev/krzysztofmmm/post"
        );
        if (response.status === 200) {
          setPosts(response.data);
        } else {
          console.error(
            "Error fetching posts:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim() === "") {
      alert("Post content cannot be empty");
      return;
    }
    const response = await axios.post(
      "https://boolean-api-server.fly.dev/krzysztofmmm/post",
      { content }
    );
    if (response.data && Array.isArray(posts)) {
      setPosts([response.data, ...posts]);
    }
    setContent("");
  };

  return (
    <div>
      {Array.isArray(posts) &&
        posts.map((post) => <Post key={post.id} post={post} />)}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
