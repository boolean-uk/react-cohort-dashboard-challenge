import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import Comment from '../components/Comment';
import { fetchPost, fetchComments } from '../services/api';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const post = await fetchPost(id);
      setPost(post);
    };
    const getComments = async () => {
      const comments = await fetchComments(id);
      setComments(comments);
    };
    getPost();
    getComments();
  }, [id]);

  return (
    <div>
      {post && <Post post={post} />}
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default PostPage;