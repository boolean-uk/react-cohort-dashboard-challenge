import ProfileImg from "../Profile/ProfileImg";

export default function Comment({comment}) {
  return (
    <div className="comment-container">
      <ProfileImg firstName={"A"} lastName={"H"} size={"small"}/>
      {comment.content}
    </div>
  )
}