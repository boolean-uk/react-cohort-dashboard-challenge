import { useEffect, useState } from "react";
import Post from "..";
import { useParams } from "react-router-dom";

export const PostView = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (postId) {
      fetch(`https://boolean-uk-api-server.fly.dev/h602121/post/${postId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch the post");
          }
          return res.json();
        })
        .then((data) => {
          setPost(data);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [postId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return <Post post={post}></Post>;
};

export default PostView;
