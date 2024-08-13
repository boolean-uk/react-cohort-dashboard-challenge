import InitialsButton from "../buttons/initialsButton";
import CommentInput from "../commentInput/commentInput.jsx";

const CommentsInput = ({
  commentInputHandler,
  newCommentButton,
  post,
  currentUser
}) => {
  return (
    <div className="comments-input">
      <InitialsButton currentUser={currentUser} />
      <CommentInput
        commentInputHandler={commentInputHandler}
        newCommentButton={newCommentButton}
        post={post}
      />
    </div>
  );
};

export default CommentsInput;
