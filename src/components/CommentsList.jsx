import CommentListItem from "./CommentListItem";
import { useContext } from "react";
import { CommentContext } from "./Comments";
import { Link } from "react-router-dom";

function CommentsList() {
    const { getUserInfo, comments, post } = useContext(CommentContext);

    return (
      <div className="posted-comments">
        {comments.length > 3 && (
          <Link to={`/post/${post.id}`}>
            See previous comments
          </Link>
        )}
        <ul className="comments-ul">
          {comments.slice(-3).map((comment) => (
            <CommentListItem
              key={comment.id}
              comment={comment}
              getUserInfo={getUserInfo}
            />
          ))}
        </ul>
      </div>
    );
}

export default CommentsList