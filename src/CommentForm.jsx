import React, { useState } from 'react';

function CommentForm({ postId, onNewComment }) {
  const [content, setContent] = useState('');
  const [contactId, setContactId] = useState('');

  const githubUsername = 'uthmel'; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = { content, postId: parseInt(postId), contactId: parseInt(contactId) };

    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/${githubUsername}/post/${postId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        const data = await response.json();
        onNewComment(data); 
        setContent(''); 
        setContactId('');
      } else {
        console.error('Failed to add comment');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="comment-input-container">
        <textarea
          placeholder="Add a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Contact ID"
          value={contactId}
          onChange={(e) => setContactId(e.target.value)}
          required
        />
        <button type="submit">Post Comment</button>
      </div>
    </form>
  );
}


export default CommentForm;


  
