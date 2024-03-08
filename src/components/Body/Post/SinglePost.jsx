/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import "../Body.css";
import { useEffect, useState } from "react";
import Post from "./Post";

export default function SinglePost() {
  const [post, setPost] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/VictorAdamson/post/${id}`)
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((jsonData) => {
        setPost(jsonData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <div className="main-body">
        <Post post={post} />
      </div>
    </>
  );
}
