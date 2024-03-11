import { useState } from 'react';
import { addCommentOnPost } from '../../../Api';

function CommentForm({ post, comments, setComments }) {
  const [commentText, setCommentText] = useState('');

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      postId: post.id, 
      content: commentText, 
      contactId: 1
    }
   
    //update the comments
    const newComment = await addCommentOnPost(body, post.id)
    setComments([...comments, newComment])
     setCommentText('');
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        value={commentText}
        onChange={handleChange}
        placeholder="Add a comment..."
        className="comment-input"
      />
      <button type="submit" className="comment-submit">Post</button>
    </form>
  );
}

export default CommentForm;
