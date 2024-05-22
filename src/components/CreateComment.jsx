// src/components/CreateComment.js
import React, { useState } from 'react';

const CreateComment = ({ postId }) => {
  const [content, setContent] = useState('');
  const [contactId, setContactId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/api/timsakande/post/${postId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, contactId }),
      });

      if (response.ok) {
        // Comment created successfully
        setContent('');
        setContactId('');
      } else {
        // Handle error
        console.error('Error creating comment');
      }
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  return (
    <div className="create-comment">
      <h3>Add a comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact ID"
          value={contactId}
          onChange={(e) => setContactId(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateComment;