/* eslint-disable react/prop-types */
import Comments from "./Comments";
import PostHeader from "./PostHeader";
import "../Body.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/VictorAdamson/contact/${post.contactId}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((jsonData) => {
        setUser(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUser, post.contactId]);

  return (
    <>
      <div className="post-box">
        <Link to={`/post/${post.id}`} className="to-post">
          <PostHeader post={post} user={user} />
          <div className="post-body">{post.content}</div>
        </Link>
        <Comments post={post} />
      </div>
    </>
  );
}
