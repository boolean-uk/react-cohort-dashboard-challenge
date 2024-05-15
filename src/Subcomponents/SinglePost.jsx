import { useParams } from "react-router-dom";
import PostCard from "./PostCard";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

export default function SinglePost() {
  const [post, setPost] = useState();
  const params = useParams().id;

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const data = await fetch(
      `https://boolean-uk-api-server.fly.dev/MrStashy/post/${params}`
    );
    const json = await data.json();
    setPost(json);
  };

  if (post) {
    return (
      <ul className="m-5 flex flex-col gap-3">
        <PostCard post={post} />
      </ul>
    );
  } else {
    return (
    <ul className="m-5 flex flex-col gap-3">
   <BarLoader color="#000046" className="my-10 place-self-center" />
    </ul>
    )
  }
}
