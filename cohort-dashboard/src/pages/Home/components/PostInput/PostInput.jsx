import UserProfileIcon from "../../../UserProfileIcon";
import PostInputForm from "./PostInputForm";

export default function PostInput(props) {
  const { setRefresh } = props;

  return (
    <div className="post-input-container">
      <UserProfileIcon />
      <PostInputForm setRefresh={setRefresh} />
    </div>
  );
}
