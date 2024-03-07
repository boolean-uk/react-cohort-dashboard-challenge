// CreatePost.jsx
import { useContext, useState } from 'react';
import { ProfileImage } from '../ProfileImage'
// import '/src/styles/Feed/CreatePost.css'
import '/src/styles/Feed/CreatePost.css'
import { PostsContext } from '../App';

export const CreatePost = () => {
  const { writePost } = useContext(PostsContext);
  const [input, setInput] = useState("");
  
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    writePost("test Title", input) //TODO: Add title input
  }
  
  return (
    <div className="comment-container">
      <div className="profile-image-container">
        <ProfileImage />
      </div>
      <input
        type="text"
        placeholder="What`s on your mind?"
        value={input}
        onChange={handleChange}
        className="feed-input-field" // Apply styles using class
      />
      <div className="post-button">
        <button 
          className="post-button-text"
          onClick={(e) => handleSubmit(e)}
        >Post</button>
      </div>
    </div>
  );
};