import SendButton from "../logo/sendLogo";

const CommentInput = ({ commentInputHandler, newCommentButton, post }) => {
  return (
    <div className="text-comment-input">
      <input
        type="text"
        placeholder="Add a comment..."
        onChange={commentInputHandler}
      ></input>

      <SendButton newCommentButton={newCommentButton} post={post} />
    </div>
  );
};

export default CommentInput;
