import PropTypes from "prop-types"
import CommentListItem from "./CommentListItem";

function CommentsList({ comments, getUserInfo }) {
    return (
      <div className="posted-comments">
        <ul className="comments-ul">
          {comments.map((comment) => (
            <CommentListItem key={comment.id} comment={comment} getUserInfo={getUserInfo} />
          ))}
        </ul>
      </div>
    );
}

CommentsList.propTypes = {
    comments: PropTypes.array,
    getUserInfo: PropTypes.func,
}

export default CommentsList