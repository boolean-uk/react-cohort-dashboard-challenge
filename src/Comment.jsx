import { useContext } from "react";
import CircleAvatar from "./CircleAvatar";
import { CommentContext, ContactContext } from "./App";
import "./style/Comment.css";
/* eslint-disable react/prop-types */
function Comment({ comment, postId }) {
  const context = useContext(ContactContext);
  const commentsContext = useContext(CommentContext);
  const { contacts } = context;
  const { deleteComment } = commentsContext;

  function onDelete() {
    deleteComment(postId, comment.id);
  }
  if (comment) {
    const user = contacts.find((u) => u.id === comment.contactId);
    if (user) {
      return (
        <div className="comment">
          <div className="avatar">
            <CircleAvatar
              backgroundColor={user.favouriteColour}
              initials={user.firstName.charAt(0) + user.lastName.charAt(0)}
            />
          </div>
          <div className="content">
            <strong>{user.firstName + " " + user.lastName}</strong>
            <div>{comment.content}</div>
          </div>
          <div>
            {" "}
            <button>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </div>
      );
    }
  }
  return <></>;
}
export default Comment;
