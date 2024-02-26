import "../styles/Post.css";
import ProfileCircle from "./ProfileCircle";

export default function Post({ children }) {
  return (
    <div className="card">
      <div className="user-info">
        <ProfileCircle color={"#64dc78"} fullname={"Test User"} />
        <div className="user-info-text">
          <h3 style={{ padding: 0, margin: 0 }}>Test User</h3>
          <p className="description">Some description the user has</p>
        </div>
      </div>
      <p className="description">{children}</p>
    </div>
  );
}
