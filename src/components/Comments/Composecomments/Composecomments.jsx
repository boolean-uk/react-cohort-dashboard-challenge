/* eslint-disable react/prop-types */
import UserProfilePic from "../../Userpicture.jsx";
import Composecommentform from "../Composecomments/Composecommentform.jsx";

export default function Composecomments({
  postId,
  setShouldReloadComments,
  API_BASE_URL,
}) {
  return (
    <div className="commentgeneratorcontainer">
      <UserProfilePic />
      <Composecommentform
        postId={postId}
        setShouldReloadComments={setShouldReloadComments}
        API_BASE_URL={API_BASE_URL}
      />
    </div>
  );
}