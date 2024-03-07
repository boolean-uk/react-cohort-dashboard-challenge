import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../../utilites/apiRequests";
import { Post } from "./Post";

export const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const handleDeletePost = () => {
    navigate("/posts");
  };

  useEffect(() => {
    getRequest(`/post/${postId}`).then((data) => setPost(data));
  }, [postId]);

  return !post ? (
    <p>Loading</p>
  ) : (
    <main>
      <Post post={post} handleDeletePost={handleDeletePost} />
    </main>
  );
};
