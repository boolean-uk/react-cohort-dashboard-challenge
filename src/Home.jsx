import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import './App.css';

function Home() {


  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/uthmel/post');
      const data = await response.json();
      const updatedPosts = await Promise.all(data.map(async (post) => {
        const commentsResponse = await fetch(`https://boolean-uk-api-server.fly.dev/uthmel/post/${post.id}/comment`);
        const commentsData = await commentsResponse.json();
        return { ...post, comments: commentsData || [] };
      }));
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const fetchAuthors = async () => {
    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/uthmel/contact');
      const data = await response.json();
      
      setAuthors(data);
     
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  }

  useEffect(() => {
    fetchPosts();
    fetchAuthors();
  }, []);

  
  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };


  const addNewComment = (postId, newComment) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...(post.comments || []), newComment], 
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div>
      <PostForm onNewPost={addNewPost} />
      <PostList posts={posts} authors={authors} onNewComment={addNewComment} />
    </div>
  );
}

export default Home;


