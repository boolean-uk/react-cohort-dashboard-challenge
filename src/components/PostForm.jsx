import { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://boolean-api-server.fly.dev/krzysztofmmm/post",
      {
        title,
        content,
        contactId: 1, // Adjust according to your requirements
      }
    );
    // Handle response or state update
    console.log(response.data);
    setTitle("");
    setContent("");
    // Optionally, redirect or fetch posts again to update the UI
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
