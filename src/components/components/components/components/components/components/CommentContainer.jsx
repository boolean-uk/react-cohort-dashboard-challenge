import UserInitials from "./components/UserInitials"
import Comment from "./components/Comment"

export default function CommentContainer({comment}) {
    return(
        <>
            <li>
                <UserInitials />
                <Comment comment={comment}/>
            </li>
        </>
    )
}