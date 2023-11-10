import ProfileImg from "../Profile/ProfileImg";

export default function Comment({comment}) {
  return (
    <div className="comment-container">
      <ProfileImg contactId={comment.contactId} size={"small"}/>
      {comment.content}
    </div>
  )
}