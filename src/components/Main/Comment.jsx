import { useEffect, useState } from "react";
import { ProfileIcon } from "../General/ProfileIcon";
import PropTypes from "prop-types";
import { getRequest } from "../../utilites/apiRequests";

export const Comment = ({ comment }) => {
  const [commentOwner, setCommentOwner] = useState(null);

  useEffect(() => {
    getRequest(
      `https://boolean-api-server.fly.dev/LinusWillmont/contact/${comment.contactId}`
    )
      .then((commentOwner) => {
        setCommentOwner(commentOwner);
      })
      .catch((error) => console.error("Failed to get comment owner", error));
  }, [comment.contactId]);

  return !commentOwner ? (
    <p>loading comment owner</p>
  ) : (
    <div className="comment">
      <ProfileIcon user={commentOwner} />
      <div className="comment-content">
        <h1>{`${commentOwner.firstName} ${commentOwner.lastName}`}</h1>
        <p>{comment.content}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
};
