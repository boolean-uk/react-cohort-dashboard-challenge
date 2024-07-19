import CommentItem from "./CommentItem";
import { commentContext } from "./PostItem";
import { useContext } from "react";

export default function CommentList() {
  const { sortedComments, commentsToDisplay, seePrevious } =
    useContext(commentContext);

  return (
    <div className="comment-section">
      <ul className="comments-ul">
        {seePrevious
          ? sortedComments.map((comment, index) => (
              <CommentItem key={index} comment={comment} />
            ))
          : commentsToDisplay.map((comment, index) => (
              <CommentItem key={index} comment={comment} />
            ))}
      </ul>
    </div>
  );
}
