import React, { useState } from "react";

function NewPost({ currentUser, onAddPost }) {
  const [postContent, setPostContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost(postContent);
    setPostContent("");
  };

  return (
    <div className="new-post-form">
      {currentUser && (
        <div className="current-user-icon">
          {currentUser.firstName[0]}
          {currentUser.lastName[0]}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default NewPost;
