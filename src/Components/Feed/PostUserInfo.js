import { Link } from "react-router-dom";
import { getInitials } from "../../Utils";

function PostUserInfo(props) {
    const { author } = props;
    const authorInitials = getInitials(author.name);
    return (
        <div class="user-info">
            <Link
                to={`/view/profile/${author.id}`}
                state={{ userData: author }}
                style={{ textDecoration: "none" }}
            >
                <div class="user-circle">{authorInitials}</div>
            </Link>
            <div class="user-name">{author.name}</div>
        </div>
    );
}

export default PostUserInfo;
