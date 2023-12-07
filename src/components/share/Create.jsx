import React, { useState } from "react";
import './create.css';

const Create = () => {
  const [firstName, setFirstName] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { firstName, content,lastName };
    setIsLoading(true);

    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    })
    .then(() => {
      console.log('New Blog Added');
      setIsLoading(false);
    });
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label> First Name:</label>
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label> Last Name:</label>
        <textarea
          value={lastName}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        
        {!isLoading && <button className="create-button">Add Blog</button>}
        {isLoading && <button className="create-button" disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}

export default Create;
