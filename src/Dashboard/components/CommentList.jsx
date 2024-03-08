import { useContext, useState } from "react";
import { CommentsContext } from "./PostItem";
import { UserContext } from "../../App";
import CommentItem from "./CommentItem";
import AddCommentForm from "../../AddCommentForm";

export default function CommentList() {
  const commentContext = useContext(CommentsContext);
  const userContext = useContext(UserContext);

  const numberOfComments = commentContext.comments.length;

  const [showAllComments, setShowAllComments] = useState(false)

  const handleClick = () => {
    setShowAllComments(true)
  }

  console.log(commentContext.comments.length)

  if (!commentContext.comments) return <div></div>;

  return (
    <ul>
      {numberOfComments > 3 && !showAllComments && (
        <button className="previous_comments_button" onClick={handleClick}>
          See previous comments
        </button>
      )}
      {numberOfComments > 3 &&
        !showAllComments &&
        commentContext.comments
          .slice(-3)
          .map((comment, index) => (
            <CommentItem
              comment={comment}
              key={index}
              commentUser={userContext.users.find(
                (user) => user.id === comment.contactId
              )}
            />
          ))}

      {showAllComments &&
        commentContext.comments.map((comment, index) => (
          <CommentItem
            comment={comment}
            key={index}
            commentUser={userContext.users.find(
              (user) => user.id === comment.contactId
            )}
          />
        ))}
      <li>
        <AddCommentForm />
      </li>
    </ul>
  );
}
