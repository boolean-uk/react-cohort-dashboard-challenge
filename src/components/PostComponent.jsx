import React from 'react';
import CreatePost from './CreatePost';
import PostList from './PostList';

const PostComponent = () => {
  return (
    <div>
      <CreatePost/>
      <PostList/>
    </div>
  );
}

export default PostComponent;
