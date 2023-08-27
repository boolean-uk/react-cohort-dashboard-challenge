import { Link } from "react-router-dom";
import { getInitials } from "../../Utils";

function Comment(props) {
    const { comment, user } = props;
    const userInitials = getInitials(user.name);
    return (
        <li key={comment.id}>
            <div class="comment">
                <Link to={`/view/profile/${user.id}`}>
                    <div class="comment-circle">{userInitials}</div>
                </Link>
                <div>
                    <div class="comment-author">{user.name}</div>
                    <div class="comment-content">{comment.body}</div>
                </div>
            </div>
        </li>
    );
}

export default Comment;
