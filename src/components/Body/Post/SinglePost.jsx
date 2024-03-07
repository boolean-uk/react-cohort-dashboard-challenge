/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import "../Body.css";
import { useEffect, useState } from "react";
import Comments from "./Comments";
export default function SinglePost({ posts }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));
  const [user, setUser] = useState({});

  // if (!post) return <p>Loading...</p>;

  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/VictorAdamson/contact/${post?.contactId}`
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
  }, [setUser]);
  //, post?.contactId
  return (
    <>
      <div className="main-body">
        <div className="post-box">
          <div className="post-header">
            <div className="post-title">{post?.title}</div>
            <div className="profile-icon">
              {user.firstName?.charAt(0)}
              {user.lastName?.charAt(0)}
            </div>
            <div className="post-user">
              @{user.firstName}_{user.lastName}
            </div>
          </div>
          <div className="post-body">{post?.content}</div>
          <Comments post={post} />
        </div>
      </div>
    </>
  );
}
