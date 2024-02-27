import "@styles/Content.css";
import PostInput from "./Post/PostInput";
import Post from "./Post/Post";
import { useGetAllPosts } from "@services/PostService";
import { useEffect, useState } from "react";

export default function Content() {
  const [posts, setPosts] = useState([]);

  useGetAllPosts(setPosts);

  const sortedPosts = posts.sort((a, b) => b.id - a.id);

  return (
    <div className="content">
      <PostInput />
      {sortedPosts.map((post) => (
        <Post title={post.title} key={post.id}>
          {post.content}
        </Post>
      ))}
    </div>
  );
}
