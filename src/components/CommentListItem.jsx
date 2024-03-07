import Avatar from "react-avatar";
import PropTypes from "prop-types"

function CommentListItem({ getUserInfo, comment }) {
    return (
      <li className="comment-item">
        <div className="comment-avatar-container">
          <Avatar
            name={`${getUserInfo(comment.contactId).firstName} ${
              getUserInfo(comment.contactId).lastName
            }`}
            round={true}
            size={50}
          />
        </div>
        <div className="comment-details">
          <div className="comment-user">
            <b>{`${getUserInfo(comment.contactId).firstName} ${
              getUserInfo(comment.contactId).lastName
            }`}</b>
          </div>
          <div className="comment-content">
            <p>{comment.content}</p>
          </div>
        </div>
        <br />
      </li>
    );
}

CommentListItem.propTypes = {
    comment: PropTypes.object,
    getUserInfo: PropTypes.func,
}

export default CommentListItem