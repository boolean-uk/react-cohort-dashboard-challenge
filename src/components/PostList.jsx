import React, { useContext } from 'react';
import { PostContext } from '../App';
import Post from './Post'

const PostList = () => {
  const {posts = [], setPosts} = useContext(PostContext)

  return (
    <div>
      {posts.toReversed().map((post, index) => {
        return <Post post={post} key={index}/>
      })}
    </div>
  );
}

export default PostList;
