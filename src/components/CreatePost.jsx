import React, { useState } from "react";

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contactId, setContactId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, contactId };
    onPostCreated(newPost);
    setTitle("");
    setContent("");
    setContactId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content:</label>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label>Contact ID:</label>
        <input
          value={contactId}
          onChange={(e) => setContactId(e.target.value)}
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
