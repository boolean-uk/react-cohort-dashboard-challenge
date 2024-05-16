import { useContext, useEffect, useState } from "react";
import { CommentsContext, UsersContext } from "../../../App";

export default function Comment({ post }) {
  const { users } = useContext(UsersContext);
  const { comments, setComments } = useContext(CommentsContext);
  console.log('post', post)

  useEffect(() => {
       fetch(
        `https://boolean-uk-api-server.fly.dev/tzoltie/post/${post.id}/comment`
      )
        .then((response) => response.json())
        .then(json => console.log('json', json));
  }, [setComments]);



  const getComment = comments.find((commentor) => commentor.contactId);

  const commentor = users.find((commentor) => {
    if (commentor.id === comments.contactId) return commentor;
  });

  return (
    <>
      {comments && (
        <ul>
          {comments.map((comment) => (
            <li className="comment" key={comment.id}>
              <div className="profile-initials">
                {commentor && (
                  <p className="initials">
                    {commentor.firstName[0]}
                    {commentor.lastName[0]}
                  </p>
                )}
              </div>
              <div className="comment-box">
                {commentor && (
                  <p id="commentor-name">
                    {commentor.firstName} {commentor.lastName}
                  </p>
                )}
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
