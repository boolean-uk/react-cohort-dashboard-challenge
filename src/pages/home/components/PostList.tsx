import React, { useContext, useEffect } from 'react';
import Post from './Post';
import { PostsContext } from '../../../App';
import { PostsContextType } from '../../../types';

const PostList = () => {
  const { posts } = useContext(PostsContext) as PostsContextType;
  const getPosts = () => { return [...posts].reverse() }

  return (
    <>
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </>
  );
};

export default PostList;