import { useContext, useEffect, useState } from "react";
import { CommentsContext, UsersContext } from "../../../App";

export default function Comment({post}) {
  const {users} = useContext(UsersContext)
  const {comments, setComments} = useContext(CommentsContext)


  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/tzoltie/post/${post.id}/comment`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, [setComments]);


  // const getComment = comments.find((commentor) => commentor.contactId);

  const commentor = users.find((commentor) => {
    if (commentor.id === post.contactId) return commentor;
  });

  return (
    <>
    {comments.map((comment) =>
      <section className="comment" key={comment.id
      }>
        <div className="profile-initials" >
          <p className="initials">
            {/* {commentor.firstName[0]}
            {commentor.lastName[0]} */}
          </p>
        </div>
        <div className="comment-box">
          {/* <p id="commentor-name">{commentor.firstName} {commentor.lastName}</p> */}
          <p>{comment.content}</p>
        </div>
      </section>)}
    </>
  );
}
