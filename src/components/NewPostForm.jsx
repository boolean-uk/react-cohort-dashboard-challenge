import React, { useState } from 'react';

const NewPostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default NewPostForm;