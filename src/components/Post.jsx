import "../styles/Post.css";
import CommentField from "./CommentField";
import PostComment from "./PostComment";
import PostInput from "./PostInput";
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
      <p className="card-content">{children}</p>
      <div className="card-comments">
        <a>See previous comments</a>
        <PostComment
          content={"What a nice post you have there!"}
          username={"Test User"}
        />
        <PostComment
          content={
            "Some long comment from an anonymous guest. Some words go here too. And a little more here."
          }
          username={"Anonymous Guest"}
        />
        <CommentField />
      </div>
    </div>
  );
}
