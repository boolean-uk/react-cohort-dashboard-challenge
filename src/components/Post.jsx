import React from 'react';

const Post = ({post}) => {
  console.log("🚀 ~ Post ~ post:", post)
  
  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
