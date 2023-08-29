import { Link } from "react-router-dom";
import { getInitials } from "../../Utils";
import { useContext } from "react";
import DataContext from "../../DataContext";

function CommentCircleIcon() {
    const { loggedUser } = useContext(DataContext);

    return (
        <div class="comment-circle-own">
            <Link
                to={`/view/profile/${loggedUser.id}`}
                style={{ textDecoration: "none" }}
            >
                {getInitials(loggedUser.name)}
            </Link>
        </div>
    );
}

export default CommentCircleIcon;
