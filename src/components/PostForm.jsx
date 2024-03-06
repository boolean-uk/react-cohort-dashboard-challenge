import { useState } from "react";
import axios from "axios";
import useLocalStorageState from "use-local-storage-state";
import Post from "./Post";

const PostForm = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useLocalStorageState("posts", []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://boolean-api-server.fly.dev/krzysztofmmm/post",
      { title, content, contactId: 42 } // Add contactId here
    );
    setPosts([response.data, ...posts]);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      {Array.isArray(posts) &&
        posts.map((post) => <Post key={post.id} post={post} />)}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
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
