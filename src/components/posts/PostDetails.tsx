import { useEffect, useState } from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";
import { PostPartialProps } from "../common/types";

export default function PostDetails() {
  const [post, setPost] = useState<PostPartialProps | null>(null);
  const { id } = useParams();

  // this is bad, should not have to do another api call here
  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/hermagst/post/${id}`)
      .then((res) => res.json())
      .then((body) => setPost(body));
  }, [id]);

  // Idk why its like this, if i try to return a mockPost if post is null it just never updates so we have to do it like this and accept the undefined fields when loading
  return <Post {...post!} />;
}
