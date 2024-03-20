function CommentListItem(props) {
  const { comment, contacts } = props

  //find the author of the comment
  const commentAuthor = contacts.find((contact) => 
  contact.id === comment.contactId);
  
  //extract initials of author
  const commentAuthorInitials = commentAuthor.firstName[0] + commentAuthor.lastName[0];

  return (
      <li className="comment-list-item">
      <div className="initials-circle">{commentAuthorInitials}</div>
        <h4 className="comment-author">
        {commentAuthor.firstName} {commentAuthor.lastName}
        </h4>
        <p className="comment-content">
          {comment.content}
        </p>
      </li>
  )
}

export default CommentListItem