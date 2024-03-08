import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import NewPostForm from "./NewPostForm";

const BASE_URL = "https://boolean-api-server.fly.dev/OsamahAlmaliki";

function PostFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/post`);
      setPosts(response.data.reverse());
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const updatePost = async (postId, updatedPostData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/post/${postId}`,
        updatedPostData
      );
      const updatedPosts = posts.map((post) =>
        post.id === postId ? response.data : post
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`${BASE_URL}/post/${postId}`);
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <h2>Post Feed</h2>
      <NewPostForm onAddPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onUpdatePost={updatePost}
          onDeletePost={deletePost}
        />
      ))}
    </div>
  );
}

export default PostFeed;
