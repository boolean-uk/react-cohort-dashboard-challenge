import { useState, useEffect } from "react";

import Avatar from "./Avatar";
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
      <Avatar>{commenter}</Avatar>
      <div className="comment-details">
        <h3 className="commenter-name">
          {commenter && `${commenter.firstName} ${commenter.lastName}`}
        </h3>
        <p className="comment-content">{comment?.content}</p>
      </div>
    </div>
  );
}
