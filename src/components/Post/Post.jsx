import "@styles/Post.css";
import CommentField from "../CommentField";
import PostComment from "./PostComment";
import ProfileCircle from "../ProfileCircle";

export default function Post({ children, title }) {
  return (
    <div className="card">
      <div className="user-info">
        <ProfileCircle color={"#64dc78"} fullname={"Test User"} />
        <div className="user-info-text">
          <h3 style={{ padding: 0, margin: 0 }}>Test User</h3>
          <p className="title">{title}</p>
        </div>
      </div>
      <p className="card-content">{children}</p>
      <div className="card-comments">
        <a>See previous comments</a>
        <CommentField />
      </div>
    </div>
  );
}
