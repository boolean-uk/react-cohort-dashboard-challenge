import { useState } from 'react';

function AddPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    console.log('submitting');
    
    e.preventDefault();
    fetch('https://boolean-uk-api-server.fly.dev/agrmet/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        contactId: 1,
      }),
    })
    .then((rs) => rs.json())
    .then(console.log);


    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='postform'>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default AddPostForm;