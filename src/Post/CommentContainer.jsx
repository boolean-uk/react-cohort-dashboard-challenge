import UserInitials from "../Low-level_components/UserInitials"
import Comment from "../Low-level_components/Comment"

export default function CommentContainer({comment, reloadContacts}) {
    return(
        <>{comment &&
            <li className="form-container comment-container">
                <UserInitials contactId={comment.contactId} reloadContacts={reloadContacts}/>
                <Comment comment={comment} reloadContacts={reloadContacts}/>
            </li> 
            }
        </>
    )
}