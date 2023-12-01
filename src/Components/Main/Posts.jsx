import { useEffect, useState } from "react";
import PostListItem from "./PostListItem";
import ProfileIcon from "../Header/ProfileIcon";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/loza01/post")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(fetchData, []);

  return (
    <div className="post-list-container">
      <ul className="post-list">
        <form className="newPostForm">
         <ProfileIcon  />
          <input type="text" placeholder="What is in your mind?" />
          <button type="submit" className="btn btn-form">Submit</button>
          </form>
        {posts.map((post, idx) => (
          <PostListItem key={idx} post={post} />
        ))}
      </ul>
    </div>
  )
}