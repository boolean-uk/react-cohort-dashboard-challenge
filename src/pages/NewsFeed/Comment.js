import UserIcon from "../../components/UserIcon";

export default function Comment() {
    return (
        <li className="comment-body">
            <UserIcon />
            <div className="comment-info">
                <p className="comment-author">Author</p>
                <p className="comment-msg">Message</p>
            </div>
        </li>
    )
}