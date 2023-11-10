import { useEffect, useState } from "react";
import ProfileIcon from "../ProfileIcon";

export default function PostCommentItem({ comment }) {
  const [commentContact, setCommmentContact] = useState(null);

  const fetchCommentContact = () => {
    fetch(
      `https://boolean-api-server.fly.dev/yee0802/contact/${comment.contactId}`
    )
      .then((res) => res.json())
      .then((data) => setCommmentContact(data));
  };

  useEffect(fetchCommentContact, []);

  return (
    <li className="comment">
      <ProfileIcon contact={commentContact} />
      <div className="comment-content">
        <h4>
          {commentContact
            ? `${commentContact.firstName} ${commentContact.lastName}`
            : "Loading..."}
        </h4>
        <p>{comment.content}</p>
      </div>
    </li>
  );
}
