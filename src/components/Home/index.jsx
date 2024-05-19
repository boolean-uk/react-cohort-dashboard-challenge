import { useState, useEffect, useContext } from "react";

import { MyContext } from "../../App.jsx";

import Comments from "../Comments";
import Post from "../Post";
import PostForm from "../PostForm";
import CommentForm from "../CommentForm";
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

  return (
    <>
      <div className="home-container">
        <div className="new-post-form-wrapper">
          <PostForm />
        </div>
        <div className="posts-wrapper">
          {posts.length < 1 ? (
            <p>Loading...</p>
          ) : (
            <div className="posts-wrapper">
                {console.log(posts)}
              {posts.map((post) => (
                <div className="post-wrapper" key={post.id}>
                  <Post post={post} />
                </div>
              ))}
            </div>
          )}

          <div className="post-wrapper">
            <Post />
            <div className="comments">
              <Comments />
            </div>
            <div className="comment-form-wrapper">
              <CommentForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
