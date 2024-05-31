/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";

import { MyContext } from "../../App";
import Comments from "../Comments";
import Post from "../Post";
import PostForm from "../PostForm";
import "./Home.css";

export default function Home() {
  const { user, posts, setPosts, API_POSTS } = useContext(MyContext);

  async function fetchPosts() {
    const response = await fetch(API_POSTS);
    const posts = await response.json();
    setPosts(posts.reverse());
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  async function handleNewPost(newPost) {
    let title = newPost.substring(0, 10);
    const response = await fetch(API_POSTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: newPost,
        title: title,
        contactId: user.id,
      }),
    });
    const createdPost = await response.json();
    setPosts([createdPost, ...posts]);
  }

  return (
    <>
      <div className="home-container">
        <div className="new-post-form-wrapper">
          <PostForm onSubmit={handleNewPost} />
        </div>

        {posts.length < 1 ? (
          <p>Loading...</p>
        ) : (
          <div className="posts-wrapper">
            {posts.map((post) => (
              <div className="post-wrapper" key={post.id}>
                <Post post={post} />
                <div className="comments">
                  <Comments postId={post.id} limit={3} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
