import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';



function PostDetail() {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchPostWithComments = async () => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/uthmel/post/${id}`);
      const data = await response.json();
      setPost(data); 
      const commentsResponse = await fetch(`https://boolean-uk-api-server.fly.dev/uthmel/post/${id}/comment`);
      const commentsData = await commentsResponse.json();
      setComments(commentsData || []); 
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  };

  const addNewComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]); 
  };

  useEffect(() => {
    fetchPostWithComments(); 
  }, [id]);

  if (!post) return <div>Loading...</div>; 

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      <h4>Comments</h4>
      <CommentList comments={comments} />

      <CommentForm postId={id} onNewComment={addNewComment} />
    </div>
  );
}

export default PostDetail;







