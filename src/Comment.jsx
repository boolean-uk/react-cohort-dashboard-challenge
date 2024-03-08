import { useContext, useState } from "react";
import CircleAvatar from "./CircleAvatar";
import { CommentContext, ContactContext } from "./App";
import "./style/Comment.css";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
function Comment({ comment, postId }) {
  const context = useContext(ContactContext);
  const commentsContext = useContext(CommentContext);
  const { contacts } = context;
  const { deleteComment, editComment } = commentsContext;
  const [isEdit, setIsEdit] = useState(false);
  const [thisComment, setThisComment] = useState(comment);

  function onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    event.target.style.height = 0;
    event.target.style.height = `${event.target.scrollHeight}px`;
    setThisComment({ ...thisComment, [name]: value });
  }
  function onEdit() {
    setIsEdit(true);
  }
  function onSave() {
    setIsEdit(false);
    editComment(thisComment, postId);
  }
  function onDelete() {
    deleteComment(postId, thisComment.id);
  }
  if (thisComment) {
    const user = contacts.find((u) => u.id === thisComment.contactId);
    if (user) {
      if (isEdit) {
        return (
          <div className="comment">
            <div className="avatar">
              <Link to={`/profile/${user.id}`}>
                <CircleAvatar
                  backgroundColor={user.favouriteColour}
                  initials={user.firstName.charAt(0) + user.lastName.charAt(0)}
                />
              </Link>
            </div>
            <div className="content">
              <strong>{user.firstName + " " + user.lastName}</strong>
              <textarea
                name="content"
                value={thisComment.content}
                onChange={onChange}
                style={{ resize: "none", width: "100%" }}
              ></textarea>
            </div>
            <div>
              <button onClick={onSave}>Save</button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="comment">
            <div className="avatar">
              <Link to={`/profile/${user.id}`}>
                <CircleAvatar
                  backgroundColor={user.favouriteColour}
                  initials={user.firstName.charAt(0) + user.lastName.charAt(0)}
                />
              </Link>
            </div>
            <div className="content">
              <Link to={`/profile/${user.id}`}>
                <strong>{user.firstName + " " + user.lastName}</strong>
              </Link>
              <div>{thisComment.content}</div>
            </div>
            <div>
              <button onClick={onEdit}>Edit</button>
              <button onClick={onDelete}>Delete</button>
            </div>
          </div>
        );
      }
    }
  }
  return <></>;
}
export default Comment;
