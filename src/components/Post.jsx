import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h2 className="post-title">{post.title}</h2>
      <p>{post.body}</p>
      <p>Author: {post.authorInitials}</p>
    </div>
  );
};

export default Post;