import PropTypes from "prop-types";

CommentItem.propTypes = {
  comment: PropTypes.object,
  commentUser: PropTypes.object,
};

export default function CommentItem(props) {
  const { comment, commentUser } = props;

  if (!commentUser) return <div></div>;

  return (
    <li>
      <div className="comment_div">
        <div className="comment_circle">
          <p className="comment_circle_text">
            {commentUser.firstName.charAt(0)}
            {commentUser.lastName.charAt(0)}
          </p>
        </div>
        <div className="comment_rectangle">
          <h4>
            {commentUser.firstName} 
            {commentUser.lastName}
          </h4>
          <p className="normal_text">{comment.content}</p>
        </div>
      </div>
    </li>
  );
}
