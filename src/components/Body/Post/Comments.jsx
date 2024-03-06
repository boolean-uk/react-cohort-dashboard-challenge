/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import "../Body.css";
import Comment from "./Comment";
import { CommentContext } from "./Post";
export default function Comments({ post }) {
  //, comments, setComments
  const { comments, setComments } = useContext(CommentContext);
  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/VictorAdamson/post/${post.id}/comment`
    )
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((jsonData) => {
        //console.log("Fetching comments: ", jsonData);
        setComments(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [post.id, setComments]);

  return (
    <>
      <div>
        Comments:
        {comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />;
        })}
      </div>
    </>
  );
}
