import UserIcon from "../../components/UserIcon";
import { useContext, useState } from "react";
import DataContext from "../../DataContext";

export default function CommentSectionAction (props) {
    const [commentMsg, setCommentMsg] = useState('')
    const {users, comments, setComments} = useContext(DataContext)
    const {postId} = props

    const handleSubmit = (event) => {
        event.preventDefault()
        //Due to randomness of data I am ommiting id field since it is not used anyway. Name field (=title) is not used so also ommiting. Making a pseudoemail to properly display the initials avatar.
        const email = users[0].name + '@'
        setComments([...comments, { postId , email, body: commentMsg }])
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