import ProfileCircle from "./ProfileCircle";
import "../styles/PostComment.css";

export default function PostComment({ username, content }) {
  return (
    <div className="post-comment">
      <ProfileCircle color={"var(--secondary"} fullname={username} />
      <div className="post-comment-content">
        <h3>{username}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
