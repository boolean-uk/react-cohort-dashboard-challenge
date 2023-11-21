import { useNavigate } from "react-router-dom";
import ProfileIcon from "../../Home/components/ProfileIcon";
import ProfileForm from "./ProfileForm";

export default function ProfilePage(props) {
  const { contactProfile, setRefresh } = props;
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-header__name">
          <ProfileIcon contact={contactProfile} />
          <h1>{`${contactProfile.firstName} ${contactProfile.lastName}`}</h1>
        </div>
        <button className="go-back-btn" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
      <hr />
      <ProfileForm contactProfile={contactProfile} setRefresh={setRefresh} />
    </div>
  );
}
