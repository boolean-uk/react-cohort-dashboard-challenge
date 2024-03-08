import React, { useContext, useEffect, useState } from "react";
import { UserCommentContext } from "../App";
import CommentProfile from "./CommentProfile";

function Comment({ comment }) {
  const [user, setUser] = useState({
    firstName: "default",
    lastName: "default",
  });

  useEffect(() => {
    fetchCommentAuthor();
  }, []);

  const fetchCommentAuthor = () => {
    fetch(
      `https://boolean-api-server.fly.dev/hannapham1007/contact/${comment.contactId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error("Error fetching comments:", error));
  };

  return (
    <>
      <div style={{ display: "flex", marginTop: "6px"}}>
        <div style={{ width: "10%" }}>
          <CommentProfile user={user} />
        </div>
        <div
          style={{
            background: "var(--form-input-background)",
            padding: "6px 12px",
            borderRadius:'8px'
          }}
        >
          <p>{comment.content}</p>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Comment;
