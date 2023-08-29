import { Link } from "react-router-dom";
import { getInitials } from "../../Utils";

function CommentUserIcon(props) {
    const { user } = props;
    const userInitials = getInitials(user.name);
    return (
        <Link
            to={`/view/profile/${user.id}`}
            style={{ textDecoration: "none" }}
        >
            <div class="comment-circle">{userInitials}</div>
        </Link>
    );
}

export default CommentUserIcon;
