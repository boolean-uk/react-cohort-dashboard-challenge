import UserProfileIcon from "../../../UserProfileIcon";
import CreatePostForm from "./CreatePostForm";

export default function CreatePost(props) {
  const { setRefresh } = props;

  return (
    <div className="post-input-container">
      <UserProfileIcon />
      <CreatePostForm setRefresh={setRefresh} />
    </div>
  );
}
