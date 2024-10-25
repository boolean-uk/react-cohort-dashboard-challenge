import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import NewPostForm from '../components/NewPostForm';
import { fetchPosts, createPost } from '../services/api';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };
    getPosts();
  }, []);

  const addPost = async (post) => {
    const newPost = await createPost(post);
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <NewPostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default Feed;