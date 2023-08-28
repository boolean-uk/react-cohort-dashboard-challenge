import UserIcon from "../../components/UserIcon";
import { useContext, useState } from "react";
import DataContext from "../../DataContext";

export default function CommentSectionAction (props) {
    const [commentMsg, setCommentMsg] = useState('')
    const {users, comments, setComments, thisCommentId, setThisCommentId} = useContext(DataContext)
    const {postId} = props

    const handleSubmit = (event) => {
        event.preventDefault()
        //Making a pseudoemail to properly display the initials avatar.
        const email = users[0].name + '@'
        //Name field (=title) is not displayed therefore not set. Set it as NoTitle for now.
        setComments([...comments, { postId , id: thisCommentId, name: 'NoTitle', email, body: commentMsg }])
        setThisCommentId(thisCommentId+1)
        setCommentMsg('')
    }

    return (
        <li>
            <div className="comment-action">
                <UserIcon user={users[0]} />
                <form className="new-comment" onSubmit={handleSubmit}>
                    <input className="new-comment-input" type='text' value={commentMsg} onChange={(event) => {setCommentMsg(event.target.value)}} placeholder="Add a comment..." />
                    <input className="new-comment-button" type="image" src = "https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png" alt = "new-comment-button" />
                </form>
            </div>
        </li>
    )
}