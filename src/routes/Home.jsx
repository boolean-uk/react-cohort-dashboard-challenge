import "@styles/Content.css";
import PostInput from "@components/Post/PostInput";
import Post from "@components/Post/Post";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAllPosts } from "@services/PostService";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { isLoading, error } = useQuery("posts", () => getAllPosts(setPosts));

  const sortedPosts = posts.sort((a, b) => b.id - a.id);

  return (
    <div className="content">
      <PostInput onClick={(post) => setPosts([...posts, post])} />
      {isLoading && <p>Loading posts...</p>}
      {error && <p>{error.message}</p>}
      {!error &&
        sortedPosts.map((post) => (
          <Post
            title={post.title}
            key={post.id}
            id={post.id}
            contactId={post.contactId}
          >
            {post.content}
          </Post>
        ))}
    </div>
  );
}
