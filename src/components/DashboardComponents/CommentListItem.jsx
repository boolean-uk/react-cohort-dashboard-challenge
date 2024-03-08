import { DataContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import ProfileAvatar from "../ProfileAvatar";

export default function CommentListItem({ comment }) {
  const users = useContext(DataContext).users;
  const posts = useContext(DataContext).posts;
  const [commentUser, setCommentUser] = useState(null)

  useEffect(() => {
    if (users) {
      const foundUser = users.find((u) => u.id === Number(comment.contactId))
      setCommentUser(foundUser);
      comment.user = foundUser
    } 
  }, [comment, users]);

  if (!comment) return <p>Loading...</p>;

  return (
    <>
      {commentUser && (
        <div className="comment">
          <ProfileAvatar
            user={commentUser}
            className="circle header-top post-circle"
          />

          <div className="comment-box">
            <p className="comment-user-name">
              {commentUser.firstName + " " + commentUser.lastName}
            </p>
            <span>
              <p>{comment.content}</p>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
