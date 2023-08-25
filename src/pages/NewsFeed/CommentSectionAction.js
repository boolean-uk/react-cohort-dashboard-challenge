import UserIcon from "../../components/UserIcon";
import { useContext } from "react";
import DataContext from "../../DataContext";

export default function CommentSectionAction () {
    const {users} = useContext(DataContext)
    return (
        <li>
            <div className="comment-action">
                <UserIcon user={users[0]} />
                <form className="new-comment">
                    <input className="new-comment-input" type='text' placeholder="Add a comment..." />
                    <input className="new-comment-button" type="image" src = "https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png" alt = "new-comment-button" />
                </form>
            </div>
        </li>
    )
}