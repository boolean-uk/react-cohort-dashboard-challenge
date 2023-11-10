export default function Comment({comment}) {
  return (
    <div className="comment">
      {comment.contactId}
      {comment.content}
    </div>
  )
}