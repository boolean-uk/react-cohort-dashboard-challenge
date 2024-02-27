import ProfileCircle from "./ProfileCircle";

export default function CommentField() {
  return (
    <div>
      <ProfileCircle color={"var(--secondary)"} fullname={"Test User"} />
      <input placeholder="Add a comment..." />
    </div>
  );
}
