import { useContext, useEffect } from "react";
import { CommentsContext, UsersContext } from "../../../App";

export default function Comment({
  comment
}) {
  const {comments} = useContext(CommentsContext)
  const {users} = useContext(UsersContext)
  const getComment = comments.find((commentor) => commentor.contactId);

  const commentor = users.find((commentor) => {
    if (commentor.id === getComment.contactId) return commentor;
  });

  return (
    <section className="comment">
      <div className="profile-initials">
        <p>
          {commentor.firstName[0]}
          {commentor.lastName[0]}
        </p>
      </div>
      <div className="comment-box">
        <p>{comment.content}</p>
      </div>
    </section>
  );
}
