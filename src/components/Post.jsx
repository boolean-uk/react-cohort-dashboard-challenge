import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import './Post.css';

function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    console.log(`Fetching comments for post ${post.id}...`);
    fetch(`https://boolean-uk-api-server.fly.dev/posts/${post.id}/comments`)
      .then(response => {
        console.log(`Fetch comments response for post ${post.id}:`, response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(`Fetched comments for post ${post.id}:`, data);
        setComments(data);
      })
      .catch(error => console.error(`Error fetching comments for post ${post.id}:`, error));
  }, [post.id]);

  const handleAddComment = () => {
    const newCommentObject = {
      body: newComment,
      postId: post.id,
      userId: 1
    };
    console.log('Adding new comment...', newCommentObject);
    fetch(`https://boolean-uk-api-server.fly.dev/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCommentObject)
    })
    .then(response => {
      console.log('Add comment response:', response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Added comment:', data);
      setComments([...comments, data]);
      setNewComment("");
    })
    .catch(error => console.error('Error adding comment:', error));
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-avatar">
          <span>{post.user?.name.charAt(0)}</span>
        </div>
        <div>
          <h4>{post.user?.name}</h4>
          <p>{post.title}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{post.body}</p>
      </div>
      <CommentList comments={comments} />
      <div className="new-comment-container">
        <input 
          type="text" 
          value={newComment} 
          onChange={(e) => setNewComment(e.target.value)} 
          placeholder="Add a comment" 
        />
        <button onClick={handleAddComment}>Post</button>
      </div>
    </div>
  );
}

export default Post;
