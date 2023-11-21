import { useState } from "react";

const NewPost = () => {
  const [newPostContent, setNewPostContent] = useState("");

  const handleInputChange = (e) => {
    setNewPostContent(e.target.value);
  };

  const handlePostClick = () => {
    
    console.log("New post content:", newPostContent);
   
    setNewPostContent("");
  };

  return (
    <>
      <div className="user"></div>
      <label htmlFor="New-Post">
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newPostContent}
          onChange={handleInputChange}
        />
      </label>
      <button className="post" onClick={handlePostClick}>
        Post
      </button>
    </>
  );
};

export default NewPost;