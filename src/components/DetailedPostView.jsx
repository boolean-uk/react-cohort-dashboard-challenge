// components/DetailedPostView.jsx

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function DetailedPostView({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchPostDetails(postId);
  }, [postId]);

  const fetchPostDetails = async (postId) => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/Alakowe19/post/${postId}`);
      if (!response.ok) throw new Error('Error fetching post details');
      const postData = await response.json();
      setPost(postData);
    } catch (error) {
      setError('Error fetching post details');
    } finally {
      setLoading(false);
    }
  };

  const handleAddComment = async () => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/Alakowe19/post/${postId}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: 'New User', content: newComment })
      });
      if (!response.ok) throw new Error('Error adding comment');
      const newCommentData = await response.json();
      setPost(prevPost => ({
        ...prevPost,
        comments: [...prevPost.comments, newCommentData]
      }));
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment', error);
    }
  };

  if (loading) return <div>Loading post details...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Post Details for Post ID: {postId}</h2>
      {post && (
        <div>
          <p>User: {post.user}</p>
          <p>Content: {post.content}</p>
          <h3>Comments:</h3>
          <ul>
            {post.comments.map(comment => (
              <li key={comment.id}>
                <strong>{comment.user}</strong>: {comment.content}
              </li>
            ))}
          </ul>
          <div>
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleAddComment}>Add Comment</button>
          </div>
        </div>
      )}
    </div>
  );
}

DetailedPostView.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default DetailedPostView;
