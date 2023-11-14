import UserPicture from "../../UserPicture";
import GenerateCommentForm from "./GenerateCommentForm";

export default function GenerateComment({
  postId,
  setShouldReloadComments,
  API_BASE_URL,
}) {
  return (
    <div className="generate__comment__container">
      <UserPicture />
      <GenerateCommentForm
        postId={postId}
        setShouldReloadComments={setShouldReloadComments}
        API_BASE_URL={API_BASE_URL}
      />
    </div>
  );
}
