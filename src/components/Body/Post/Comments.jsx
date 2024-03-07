/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import "../Body.css";
import Comment from "./Comment";
import AddComment from "./AddComment";

export const CommentContext = createContext();
export default function Comments({ post }) {
  const [comments, setComments] = useState([{ title: "", content: "" }]);
  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/VictorAdamson/post/${post?.id}/comment`
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
  }, [post?.id, setComments]);

  return (
    <>
      <CommentContext.Provider value={{ comments, setComments }}>
        <div>
          Comments:
          {comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })}
          <AddComment
            post={post}
            comments={comments}
            setComments={setComments}
          />
        </div>
      </CommentContext.Provider>
    </>
  );
}
