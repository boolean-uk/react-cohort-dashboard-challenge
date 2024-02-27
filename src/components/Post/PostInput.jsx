import "@styles/Post.css";
import "@styles/PostInput.css";
import ProfileCircle from "../ProfileCircle";

export default function PostInput() {
  return (
    <div className="card">
      <div>
        <ProfileCircle color={"#64dc78"} fullname={"Test User"} />
        <input placeholder="What's on your mind?" />
        <button>Post</button>
      </div>
    </div>
  );
}
