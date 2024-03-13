import ProfileCircle from "../components/ProfileCircle";

export default function CommentListItem(props) {
    const { comment, contacts } = props
  
    const author = contacts.find((contact) => 
    contact.id === comment.contactId);
  
    const authorInitials = author.firstName[0] + author.lastName[0];
  
    return (
        <li className="comment-list-item">
        <ProfileCircle name={authorInitials} colour={author.favouriteColour} id={author.id}/>
          <h4 className="comment-author">
          {author.firstName} {author.lastName}
          </h4>
          <p className="comment-content">
            {comment.content}
          </p>
        </li>
    )
  }
  