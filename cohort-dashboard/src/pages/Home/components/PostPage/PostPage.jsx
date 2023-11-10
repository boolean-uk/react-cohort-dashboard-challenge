import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostListItem from "../PostList/PostListItem";

export default function PostPage() {
  const [post, setPost] = useState({});

  const param = useParams();
  const { postid } = param;

  const navigate = useNavigate();

  const fetchPost = () => {
    fetch(`https://boolean-api-server.fly.dev/yee0802/post/${postid}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  };

  useEffect(fetchPost, []);

  if (post.content) {
    return (
      <div className="post-page">
        <button onClick={() => navigate(-1)}>Go Back</button>
        <PostListItem post={post} />
      </div>
    );
  }
}
