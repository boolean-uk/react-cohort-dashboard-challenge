// src/components/Post.js
import React from 'react';
import AuthorInfo from './AuthorInfo';
import PostContent from './PostContent';
import CommentList from './CommentList';
import CreateComment from './CreateComment';

const Post = ({ post }) => {
  return (
    <div className="post">
      <AuthorInfo author={post.author} />
      <PostContent title={post.title} content={post.content} />
      <CommentList comments={post.comments} />
      <CreateComment postId={post.id} />
    </div>
  );
};

export default Post;