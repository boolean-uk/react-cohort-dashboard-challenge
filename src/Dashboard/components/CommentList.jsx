import { useContext } from "react";
import { CommentsContext } from "./PostItem";
import { UserContext } from "../../App";
import CommentItem from "./CommentItem";
import AddCommentForm from "../../AddCommentForm/AddCommentForm";

export default function CommentList() {
  const commentContext = useContext(CommentsContext);
  const userContext = useContext(UserContext);

  if (!commentContext.comments) return <div></div>;

  return (
    <ul>
      {commentContext.comments.map((comment, index) => (
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
