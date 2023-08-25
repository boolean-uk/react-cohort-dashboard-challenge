import UserIcon from "../../components/UserIcon";

export default function CommentSectionAction () {
    return (
        <li>
            <div className="comment-action">
                <UserIcon />
                <form className="new-comment">
                    <input className="new-comment-input" type='text' placeholder="Add a comment..." />
                    <input className="new-comment-button" type="image" src = "https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png" alt = "new-comment-button" />
                </form>
            </div>
        </li>
    )
}