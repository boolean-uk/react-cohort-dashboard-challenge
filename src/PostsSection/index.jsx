<<<<<<< HEAD
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
=======
export function PostsSection() {
  return (
    <div className="main-page">
      {/* Render PostList and potentially other components related to the main page */}
      <h1>THIS IS THE POST SECTION</h1>
      <h1>THIS IS THE POST SECTION</h1>
      <h1>THIS IS THE POST SECTION</h1>
      <h1>THIS IS THE POST SECTION</h1>
      <h1>THIS IS THE POST SECTION</h1>
      <h1>THIS IS THE POST SECTION</h1>
      <h1>THIS IS THE POST SECTION</h1>
      <h1>THIS IS THE POST SECTION</h1>
      <h1>THIS IS THE POST SECTION</h1>
>>>>>>> 23056adfe6455c018ed5eaffd32cccae66c05ee8
    </div>
  );
}
