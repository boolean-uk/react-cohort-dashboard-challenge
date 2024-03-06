/* eslint-disable react/prop-types */
import AddComment from "./AddComment";
import Comments from "./Comments";
import PostHeader from "./PostHeader";
import "../Body.css";
import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CommentContext = createContext();
export default function Post({ post }) {
  const [comments, setComments] = useState([{ title: "", content: "" }]);
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
  }, [setUser, setComments, post.contactId]);

  return (
    <div className="post-box">
      <CommentContext.Provider value={{ comments, setComments }}>
        <Link to={`/post/${post.id}`} className="to-post">
          <PostHeader post={post} user={user} />
          <div className="post-body">{post.content}</div>
        </Link>
        <Comments post={post} comments={comments} setComments={setComments} />
        <AddComment post={post} comments={comments} setComments={setComments} />
      </CommentContext.Provider>
    </div>
  );
}
