import React, { useState } from 'react';

function PostForm({ onNewPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contactId, setContactId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, content, contactId: parseInt(contactId) };

    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/uthmel/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.status === 201) {
        const data = await response.json();
        onNewPost(data);
      } else {
        console.error('Error posting:', await response.json());
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="What's on your mind?"
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
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;
