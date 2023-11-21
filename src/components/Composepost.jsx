import ComposePostForm from "./Composepostform";
import UserProfilePic from "../Userpicture";

export default function ComposePost() {
  return (
    <div className="makeapost">
      <UserProfilePic />
      <ComposePostForm />
    </div>
  );
}