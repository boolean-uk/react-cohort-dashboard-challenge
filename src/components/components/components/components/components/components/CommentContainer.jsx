import UserInitials from "./components/UserInitials"
import Comment from "./components/Comment"

export default function CommentContainer() {
    return(
        <>
            <li>
                <UserInitials />
                <Comment />
            </li>
        </>
    )
}