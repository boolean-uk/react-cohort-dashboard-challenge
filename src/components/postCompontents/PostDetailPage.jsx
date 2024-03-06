import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utilites/apiRequests";
import { Post } from "./Post";

export const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getRequest(
      `https://boolean-api-server.fly.dev/LinusWillmont/post/${postId}`
    ).then((data) => setPost(data));
  }, [postId]);

  return !post ? (
    <p>Loading</p>
  ) : (
    <main>
      <Post post={post} />
    </main>
  );
};
