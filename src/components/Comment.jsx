import "../App.css";
import PropTypes from "prop-types";
function CommentElement(props) {
  return (
    <div className="post-comment-box">
      <div className="post-comment-circle">
        <p className="comment-circle-text">MP</p>
      </div>
      <div></div>
      <div className="post-comment-content">
        <h4>name of commenter</h4>
        {props.comment.content}
      </div>
    </div>
  );
}
export default CommentElement;
CommentElement.propTypes = {
  comment: PropTypes.object,
};
