import { useEffect, useState } from "react";
import ProfileIcon from "../ProfileIcon";
import { Link } from "react-router-dom";
import DeleteCommentBtn from "./DeleteCommentBtn";

export default function PostCommentItem(props) {
  const [commentContact, setCommmentContact] = useState(null);

  const { comment, postid, setRefreshComments } = props;

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
          {commentContact ? (
            <Link
              className="profile-link"
              to={`/${commentContact.id}/profile`}
            >{`${commentContact.firstName} ${commentContact.lastName}`}</Link>
          ) : (
            "Loading..."
          )}
        </h4>
        <p>{comment.content}</p>
      </div>
      <DeleteCommentBtn
        postid={postid}
        commentid={comment.id}
        setRefreshComments={setRefreshComments}
      />
    </li>
  );
}
