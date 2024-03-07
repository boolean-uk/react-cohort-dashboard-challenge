import CommentListItem from "./CommentListItem";
import { useContext } from "react";
import { CommentContext } from "./Comments";

function CommentsList() {
    const { getUserInfo, comments } = useContext(CommentContext);

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

export default CommentsList