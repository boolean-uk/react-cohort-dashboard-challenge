import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostListItem from "./PostListItem";

function DetailedPost({ posts, fetchPosts }) {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("fetch post with id= ", id);
    const selectedPost = posts.find((p) => p.id === parseInt(id));
    console.log(selectedPost);

    setPost(selectedPost);
  }, [id, posts]);

  if (!post) return <p>Loading...</p>;
  return (
    <article>
      <h2>
        <PostListItem post={post} fetchPosts={fetchPosts} />
      </h2>
    </article>
  );
}

export default DetailedPost;
