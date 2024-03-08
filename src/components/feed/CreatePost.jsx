// CreatePost.jsx
import { useContext, useState } from 'react';
import { ProfileImage } from '../ProfileImage'

import '/src/styles/Feed/CreatePost.css'
import { AuthContext, PostsContext } from '../App';

export const CreatePost = () => {
  const authUser = useContext(AuthContext)
  const { writePost } = useContext(PostsContext);
  const [input, setInput] = useState("");
  
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
    writePost("test Title", input) //TODO: Add title input
  }
  
  return (
    <div className="create-post-container">
      <div className="profile-image-container">
        <ProfileImage user={authUser} />
      </div>
      <input
        type="text"
        placeholder="What`s on your mind?"
        value={input}
        onChange={handleChange}
        className="create-post-input-field"
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