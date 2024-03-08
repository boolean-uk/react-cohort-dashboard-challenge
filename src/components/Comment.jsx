import React, { useContext, useEffect, useState } from "react";
import Profile from "./Profile";
import { UserCommentContext } from "../App";
import CommentProfile from "./CommentProfile";

function Comment({ comment}) {
  const [user, setUser] = useState({
    firstName: "default",
    lastName: "lastName"
  })

  useEffect(() => {
    fetchCommentAuthor()
  }, []);

  const fetchCommentAuthor = () =>{
    fetch(`https://boolean-api-server.fly.dev/hannapham1007/contact/${comment.contactId}`)
    .then((response) => response.json())
    .then((data) => {
      //console.log("Comment author", data);
      setUser(data);
    })
    .catch((error) => console.error("Error fetching comments:", error));
  }

  return (
    <>
      <div>
        <CommentProfile user={user}/>
        <p>{comment.content}</p>
      </div>
      <div>


      </div>
    </>
  );
}

export default Comment;
