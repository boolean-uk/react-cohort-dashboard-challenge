import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

CommentItem.propTypes = {
  comment: PropTypes.object,
  commentUser: PropTypes.object,
};

export default function CommentItem(props) {
  const { comment, commentUser } = props;

  const navigate = useNavigate();

  if (!commentUser) return <div></div>;

  const goToProfile = () => {
    navigate(`/view_profile/${commentUser.id}`);
  };

  return (
    <li>
      <div className="comment_div">
        <button
          className="comment_circle"
          style={{ backgroundColor: commentUser.favouriteColour }}
          onClick={goToProfile}
        >
          <p className="comment_circle_text">
            {commentUser.firstName.charAt(0)}
            {commentUser.lastName.charAt(0)}
          </p>
        </button>
        <div className="comment_rectangle">
          <h4 className="comment_name_text">
            {commentUser.firstName} {commentUser.lastName}
          </h4>
          <p className="comment_text">{comment.content}</p>
        </div>
      </div>
    </li>
  );
}
