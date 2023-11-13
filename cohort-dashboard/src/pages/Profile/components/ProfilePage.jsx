import ProfileIcon from "../../Home/components/ProfileIcon";
import ProfileForm from "./ProfileForm";

export default function ProfilePage(props) {
  const { contactProfile, setRefresh } = props;
  return (
    <div className="profile-page">
      <div className="profile-header">
        <ProfileIcon contact={contactProfile} />
        <h1>{`${contactProfile.firstName} ${contactProfile.lastName}`}</h1>
      </div>
      <hr />
      <ProfileForm contactProfile={contactProfile} setRefresh={setRefresh} />
    </div>
  );
}
