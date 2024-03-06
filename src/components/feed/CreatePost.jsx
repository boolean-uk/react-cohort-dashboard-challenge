// CreatePost.jsx
import { useState } from 'react';
import { ProfileImage } from '../ProfileImage'
// import '/src/styles/Feed/CreatePost.css'
import '/src/styles/Feed/index.css'

export const CreatePost = () => {
    const [input, setInput] = useState('');
  
    const handleChange = (event) => {
      setInput(event.target.value);
    };
  
    return (
      <div className="feed-entry">
        <div className='rem-right'>
            <ProfileImage />
        </div>
        <input
          type="text"
          placeholder='What`s on your mind?'
          value={input}
          onChange={handleChange}
          className="feed-input-field" // Apply styles using class
        />
        <div className='post-button'>
            <button className='post-button-text'>Post</button>
        </div>
      </div>
    );
  };