import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../DataContext";

function PostTitle(props) {
    const { comments } = useContext(DataContext);
    const { post } = props;

    return (
        <Link
            to={`/view/post/${post.id}`}
            state={{
                data: { currentPost: post, comments },
            }}
            style={{ textDecoration: "none" }}
        >
            <div class="post-title">{post.title}</div>
        </Link>
    );
}

export default PostTitle;
