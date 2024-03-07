import { useEffect, useState } from "react";
import NewPostForm from "../Post/NewPostForm";
import PostList from "../Post/PostList";
import { fetchPosts } from "../API/api";

export function PostsSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAndSetPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchAndSetPosts();
  }, []);

  return (
    <div className="main-content">
      <NewPostForm setPosts={setPosts} />
      <PostList posts={posts} />
    </div>
  );
}
