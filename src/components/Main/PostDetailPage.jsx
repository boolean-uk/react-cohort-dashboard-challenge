import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utilites/apiRequests";
import { Post } from "./Post";

export const PostDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getRequest(
      `https://boolean-api-server.fly.dev/LinusWillmont/post/${id}`
    ).then((data) => setPost(data));
  }, [id]);

  return !post ? (
    <p>Loading</p>
  ) : (
    <main>
      <Post post={post} />
    </main>
  );
};
