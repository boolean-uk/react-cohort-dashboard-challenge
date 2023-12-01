import React, { useEffect, useState } from "react";
import PostListItem from "./PostListItem";
import ProfileIcon from "../Header/ProfileIcon";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");

  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/loza01/post")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetchData();

    setNewPostContent("");
  };

  useEffect(fetchData, []);

  return (
    <div className="post-list-container">
      <ul className="post-list">
        <form className="newPostForm" onSubmit={handleFormSubmit}>
          <ProfileIcon />
          <input
            type="text"
            placeholder="What is in your mind?"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />
          <button type="submit" className="btn btn-form">
            Submit
          </button>
        </form>
        {posts.map((post, idx) => (
          <PostListItem key={idx} post={post} />
        ))}
      </ul>
    </div>
  );
}
