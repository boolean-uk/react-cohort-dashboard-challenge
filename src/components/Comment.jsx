import { useState, useEffect } from "react";

import Avatar from "./Avatar";
import { Link } from "react-router-dom";
export default function Comment(props) {
  const [commenter, setCommenter] = useState();
  const { comment, contacts } = props;

  useEffect(() => {
    contacts.find((contact) => {
      if (contact.id == comment.contactId) {
        setCommenter(contact);
      }
    });
  }, [comment, contacts]);

  return (
    <div className="comment">
      <Link to={`/profile/${commenter?.id}`}>
        <Avatar>{commenter}</Avatar>
      </Link>
      <div className="comment-details">
        <Link to={`/profile/${commenter?.id}`}>
          <h3 className="commenter-name">
            {commenter && `${commenter.firstName} ${commenter.lastName}`}
          </h3>
        </Link>

        <p className="comment-content">{comment?.content}</p>
      </div>
    </div>
  );
}
