import { useEffect, useState } from "react";
import PostListItem from "./PostListItem";
import ProfileIcon from "../Header/ProfileIcon";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState(""); 

  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/loza01/post")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (newPostText.trim() === "") {
      return;
    }

    fetch("https://boolean-api-server.fly.dev/loza01/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newPostText }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchData();
        setNewPostText("");
      });
  };

  useEffect(fetchData, []);

  return (
    <div className="post-list-container">
      <form className="newPostForm" onSubmit={handleFormSubmit}>
        <ProfileIcon />
        <input
          type="text"
          placeholder="What is in your mind?"
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        />
        <button type="submit" className="btn btn-form">
          Submit
        </button>
      </form>
      <ul className="post-list">
        {posts.map((post, idx) => (
          <PostListItem key={idx} post={post} />
        ))}
      </ul>
    </div>
  );
}
