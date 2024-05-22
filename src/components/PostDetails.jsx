// src/components/PostDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';
import CommentList from './CommentList';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/api/timsakande/post/${id}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-details">
      <Post post={post} />
      <CommentList comments={post.comments} />
    </div>
  );
};

export default PostDetails;