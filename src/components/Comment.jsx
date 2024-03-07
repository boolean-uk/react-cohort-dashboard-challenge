import "../App.css";
import PropTypes from "prop-types";
import GetInitalsFromNames from "../GetInitialsFromNames";
import { useEffect, useState } from "react";
import { getAContactByID } from "../Api";
function CommentElement(props) {
  const [posterInformation, setPosterInformation] = useState(null);
  useEffect(() => {
    getAContactByID(props.comment.contactId, setPosterInformation);
  }, [props.comment.contactId]);

  return (
    <div className="post-comment-box">
      <div className="post-comment-circle">
        {posterInformation && (
          <p className="comment-circle-text">
            {GetInitalsFromNames(
              posterInformation.firstName,
              posterInformation.lastName
            )}
          </p>
        )}
      </div>
      <div></div>
      <div className="post-comment-content">
        {posterInformation && (
          <h4>
            {posterInformation.firstName + " " + posterInformation.lastName}
          </h4>
        )}
        {props.comment.content}
      </div>
    </div>
  );
}
export default CommentElement;
CommentElement.propTypes = {
  comment: PropTypes.object,
};
