import { useEffect, useState } from "react";
import { ProfileIcon } from "../General/ProfileIcon";
import PropTypes from "prop-types";
import { deleteRequest, getRequest } from "../../utilites/apiRequests";

export const Comment = ({ comment, handleDeleteComment }) => {
  const [commentOwner, setCommentOwner] = useState(null);

  const deletComment = () => {
    deleteRequest(`/post/${comment.postId}/comment/${comment.id}`).then(() =>
      handleDeleteComment()
    );
  };

  useEffect(() => {
    getRequest(`/contact/${comment.contactId}`)
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
        <button>Edit</button>
        <button onClick={deletComment}>Delete</button>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
  handleDeleteComment: PropTypes.func,
};
