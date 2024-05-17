import { useContext, useEffect, useState } from "react";
import { CommentsContext, UsersContext } from "../../../App";

export default function Comment({ post }) {
  const { users } = useContext(UsersContext);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/tzoltie/post/${post.id}/comment`
    )
      .then((response) => response.json())
      .then((json) => setComment(json));
  }, [setComment]);

  const getCommentId = comment.forEach((comment) => {
    if (comment.contactId)
      return console.log("forEach-contactId", comment.contactId);
  });

  const commentor = users.forEach((user) => {
    if (user.id === getCommentId) return user.id === getCommentId;
  });

  return (
    <>
      {comment && (
        <ul>
          {comment.map((comment) => (
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
