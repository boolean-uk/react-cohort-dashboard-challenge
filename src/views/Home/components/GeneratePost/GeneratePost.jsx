import GeneratePostForm from "./GeneratePostForm";
import UserPicture from "../UserPicture";

export default function CreatePost({ setReload, API_BASE_URL }) {
  return (
    <div className="post__input">
      <UserPicture />
      <GeneratePostForm setReload={setReload} API_BASE_URL={API_BASE_URL} />
    </div>
  );
}
