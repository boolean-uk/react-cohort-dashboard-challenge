import CommentForm from "./CommentForm";
import CommentIcon from "./CommentIcon";

function AddNewComment({
  loggedInUserInitials,
  root,
  post,
  setComments,
  loggedInUser,
}) {
  return (
    <div className="comment">
      <CommentIcon loggedInUserInitials={loggedInUserInitials}></CommentIcon>
      <CommentForm
        root={root}
        post={post}
        setComments={setComments}
        loggedInUser={loggedInUser}
      ></CommentForm>
    </div>
  );
}

export default AddNewComment;
