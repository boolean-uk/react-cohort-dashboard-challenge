import UserProfileIcon from "../../../../UserProfileIcon";
import CreateCommentForm from "./CreateCommentForm";

export default function CreateComment({ postId, setRefreshComments }) {
  return (
    <div className="comment-input-container">
      <UserProfileIcon />
      <CreateCommentForm
        postId={postId}
        setRefreshComments={setRefreshComments}
      />
    </div>
  );
}
