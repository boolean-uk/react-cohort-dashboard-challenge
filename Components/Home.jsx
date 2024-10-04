import CreatePost from "./CreatePost";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/samisalehsaeed/post`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        data.forEach((post) => {
          fetchComments(post.id);
        });
      });
  }, []);

  const fetchComments = (postId) => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/samisalehsaeed/post/${postId}/comment`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments((prevComments) => [
          ...prevComments.filter((c) => c.postId !== postId),
          ...data,
        ]);
      });
  };
  return (
    <>
      <CreatePost />
    </>
  );
}
