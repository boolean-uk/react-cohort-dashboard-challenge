import "@styles/Content.css";
import "@styles/Post.css";
import "@styles/Profile.css";
import ProfileCircle from "@components/ProfileCircle";
import ProfileForm from "@components/Profile/ProfileForm";

export default function Profile() {
  return (
    <div className="content">
      <h1>Profile</h1>
      <div className="card">
        <div className="user-info">
          <ProfileCircle fullname="Test User" color="var(--secondary)" />
          <h2>Test User</h2>
        </div>
        <ProfileForm />
      </div>
    </div>
  );
}
