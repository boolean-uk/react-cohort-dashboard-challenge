import { useEffect, useState } from "react";
import * as API from "../../../../API/API";
import ProfileCircle from "../../../ProfileCircle/ProfileCircle";
import "./PostComment.css";

function PostComment({ comment }) {
  const [commentUser, setCommentUser] = useState("");

  const getUser = () => {
    API.getUserById(comment.contactId)
      .then((res) => res.json())
      .then((userData) => {
        // console.log(userData);
        setCommentUser(userData);
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getUser(), []);
  return (
    <div className="d-flex my-3">
      <div className="mr-3">
        <ProfileCircle user={commentUser} />
      </div>
      <div className="chat-bubble">
        <h6>
          {commentUser.firstName} {commentUser.lastName} commentId: {comment.id}
        </h6>
        <p>{comment.content}</p>
      </div>
    </div>
  );
}
export default PostComment;
