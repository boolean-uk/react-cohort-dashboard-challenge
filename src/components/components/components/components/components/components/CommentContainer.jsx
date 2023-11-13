import UserInitials from "./components/UserInitials"
import Comment from "./components/Comment"

export default function CommentContainer({comment}) {
    return(
        <>{comment &&
            <li className="form-container comment-container">
                <UserInitials contactId={comment.contactId}/>
                <Comment comment={comment}/>
            </li> 
            }
        </>
    )
}