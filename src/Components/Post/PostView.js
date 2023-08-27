import { useContext, useEffect, useState } from "react";
import DataContext from "../../DataContext";
import { useLocation, useParams } from "react-router-dom";
import CommentsLists from "../Comment/CommentsList";
import CommentForm from "../../Forms/CommentForm";
import { getInitials } from "../../Utils";

function PostView(props) {
    const { posts, setPosts, loggedUser, setComments, comments } =
        useContext(DataContext);
    const [post, setPost] = useState(null);
    const loggedUserInitials = getInitials(loggedUser.name);

    const location = useLocation();

    const { postId } = useParams();

    const {
        state: {
            data: { currentPost },
        },
    } = useLocation();

    useEffect(() => {
        if (location.state) {
            setPost(currentPost);
        }
    }, [location]);

    if (!post || !comments) return <p>Loading...</p>;

    return (
        <main className="main-section">
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <CommentsLists comments={comments} />
            <CommentForm
                initials={loggedUserInitials}
                comments={comments}
                setComments={setComments}
            />
        </main>
    );
}

export default PostView;
