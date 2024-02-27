import "@styles/Content.css";
import PostInput from "./Post/PostInput";
import Post from "./Post/Post";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAllPosts } from "@services/PostService";

export default function Content() {
  const [posts, setPosts] = useState([]);
  const { isLoading, error } = useQuery("posts", () => getAllPosts(setPosts));

  const sortedPosts = posts.sort((a, b) => b.id - a.id);

  return (
    <div className="content">
      <PostInput onClick={(post) => setPosts([...posts, post])} />
      {isLoading && <p>Loading posts...</p>}
      {error && <p>{error.message}</p>}
      {sortedPosts.map((post) => (
        <Post title={post.title} key={post.id} id={post.id}>
          {post.content}
        </Post>
      ))}
    </div>
  );
}
