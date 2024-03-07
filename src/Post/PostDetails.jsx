import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../API/api";
import CommentList from "./CommentList";

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchAndSetPost = async () => {
      try {
        const fetchedPost = await fetchPostById(postId);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    fetchAndSetPost();
  }, [postId]);

  if (!post) return <p>Loading post details...</p>;

  return (
    <div>
      <h1 style={{ backgroundColor: "#64648c" }}>{post.title}</h1>
      <p>{post.content}</p>
      <CommentList postId={post.id} post={post} />
    </div>
  );
}

export default PostDetails;
