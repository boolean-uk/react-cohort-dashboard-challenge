import { useContext, useEffect, useState } from "react";
import DataContext from "../../DataContext";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { getInitials } from "../../Utils";
import PostTitle from "../Feed/PostTitle";
import PostBody from "../Feed/PostBody";
import PostViewComments from "./PostViewComments";
import CommentForm from "../../Forms/CommentForm/CommentForm";
import Loader from "../Loader";

function PostView() {

    const {
        setPosts,
        loggedUser,
        setComments,
        comments,
        setEditingIndex,
        API_BASE_URL,
    } = useContext(DataContext);

    const [post, setPost] = useState(null);
    
    
    const navigate = useNavigate();

    const location = useLocation();

    const { id } = useParams();

    const {
        state: {
            data: { currentPost },
        },
    } = useLocation();

    const loggedUserInitials = getInitials(loggedUser.name);

    const deletePost = (postId) => {
        fetch(`${API_BASE_URL}/posts/${postId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    setPosts((prevPosts) =>
                        prevPosts.filter((post) => post.id !== postId)
                    );

                    setComments((prevComments) => {
                        const newComments = { ...prevComments };
                        delete newComments[postId];
                        return newComments;
                    });
                }
            })
            .catch((error) => {
                console.error("Error deleting post:", error);
            });
    };
    
    const handleDelete = () => {
        deletePost(post.id);
        navigate("/");
    };

    useEffect(() => {
        if (location.state) {
            setPost(currentPost);
        }
    }, [location]);

    const handleEditClick = () => {
        setEditingIndex(id);
    };

    if (!post || !comments) return <Loader/>;

    return (
        <main className="main-section">
            <div class="comment-buttons">
                <Link
                    to={`/edit/post/${id}`}
                    style={{ textDecoration: "none" }}
                >
                    <button onClick={handleEditClick}>EDIT POST</button>
                </Link>
                <button onClick={handleDelete} className="delete-button">
                    Delete Post
                </button>
            </div>
            <div className="post-content">
                <PostTitle post={post} />
                <PostBody post={post} />

                <br />
                <PostViewComments post={post} />
                <CommentForm
                    initials={loggedUserInitials}
                    comments={comments[post.id]}
                    post={post}
                />
            </div>
        </main>
    );
}

export default PostView;
