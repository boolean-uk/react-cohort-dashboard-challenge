import React, { useState, useContext } from "react";
import { PostContext } from "../../App";

export default function CreatePostComponent() {
  const { posts, setPosts } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1, 
      title,
      content,
      author: "", 
      initials: "", 
      comments: [],
    };
    setPosts([newPost, ...posts]); 
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}
