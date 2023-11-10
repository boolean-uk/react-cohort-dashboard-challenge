import UserInitials from "./components/UserInitials"
import Comment from "./components/Comment"

export default function CommentContainer({comment}) {
    return(
        <>
            <li>
                <UserInitials contactId={comment.contactId}/>
                <Comment comment={comment}/>
            </li>
        </>
    )
}