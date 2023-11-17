import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  // 3. useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // 2. Fetch post

  const fetchData = () => {
    fetch(`https://boolean-api-server.fly.dev/ps975076/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  };

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>{post.title}</h1>
      <Post onePost={post} />
    </div>
  );
}

export default PostDetail;
