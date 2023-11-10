import ProfileImg from "../Profile/ProfileImg";

export default function Comment({comment}) {
  return (
    // TODO: replace UserId
    <div className="comment-container">
      <ProfileImg userId={2} size={"small"}/>
      {comment.content}
    </div>
  )
}