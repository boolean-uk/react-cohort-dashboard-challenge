import { useState } from 'react';

function AddCommentForm({ postId }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://boolean-uk-api-server.fly.dev/agrmet/post/${postId}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          postId: postId,
          content: comment,
          contactId: 1
        }),
    })
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Comment</button>
    </form>
  );
}

export default AddCommentForm;
