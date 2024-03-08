import { DataContext } from "../../App";
import { useContext, useEffect, useState } from "react";

export default function CommentListItem({ comment }) {
  const users = useContext(DataContext).users;
  const posts = useContext(DataContext).posts;
  const [commentUser, setCommentUser] = useState(null)

  useEffect(() => {
    if (users) {
      setCommentUser(users.find((u) => u.id === Number(comment.contactId)));
    }
  }, [comment.contactId, users]);

  if (!comment) return <p>Loading...</p>;

  return (
    <>
      {commentUser && (
        <div className="comment">
          <div
            className="circle header-top post-circle"
            style={{ background: commentUser.favouriteColour }}
          >
            {commentUser.firstName[0] + commentUser.lastName[0]}
          </div>

          <div className="comment-box">
            <p className="comment-user-name">
              {commentUser.firstName + " "+ commentUser.lastName}
            </p>
            <p>{comment.content}</p>{" "}
          </div>
        </div>
      )}
    </>
  );
}
