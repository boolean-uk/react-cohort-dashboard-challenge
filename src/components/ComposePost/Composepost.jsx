/* eslint-disable react/prop-types */
import Composepostform from "../ComposePost/Composepostform";
import UserProfilePic from "../Userpicture";

export default function ComposePost({ setRefresh, API_BASE_URL }) {
  return (
    <div className="makeapost">
      <UserProfilePic />
      <Composepostform setRefresh={setRefresh} API_BASE_URL={API_BASE_URL} />
    </div>
  );
}
