import { useContext, useEffect, useState } from "react";
import DataContext from "../../DataContext";
import { Link, useLocation, useParams } from "react-router-dom";
import CommentsLists from "../Comment/CommentsList";
import CommentForm from "../../Forms/CommentForm";
import { getInitials } from "../../Utils";

function PostView(props) {
    const {
        posts,
        setPosts,
        loggedUser,
        setComments,
        comments,
        editingIndex,
        setEditingIndex,
    } = useContext(DataContext);
    const [post, setPost] = useState(null);
    const loggedUserInitials = getInitials(loggedUser.name);

    const location = useLocation();

    const { id } = useParams();
    console.log(id);
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

    const handleEditClick = () => {
        console.log("Edit button clicked with id ", id);
        // console.log("Edit button clicked");
        setEditingIndex(id);
        console.log("editing index: ", editingIndex);
        // const editedAnswer = results.find((r) => r.id === id);
        // setFormData(editedAnswer);
    };
    console.log("editing index: ", editingIndex);

    if (!post || !comments) return <p>Loading...</p>;

    return (
        <main className="main-section">
            <h1>{post.title}</h1>
            <Link
                to={`/edit/post/${id}`}
                //  state={{ userData }}
            >
                <button onClick={handleEditClick}>EDIT POST</button>
            </Link>
            <h2>{post.body}</h2>
            <CommentsLists comments={comments[post.id]} />
            <CommentForm
                initials={loggedUserInitials}
                comments={comments[post.id]}
                post={post}
            />
        </main>
    );
}

export default PostView;
