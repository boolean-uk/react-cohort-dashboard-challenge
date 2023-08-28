import { useContext, useEffect, useState } from "react";
import DataContext from "../../DataContext";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import CommentsLists from "../Comment/CommentsList";
import { getInitials } from "../../Utils";
import CommentForm from "../../Forms/CommentForm";

function PostView() {
    const {
        setPosts,
        loggedUser,
        setComments,
        comments,
        setEditingIndex,
        updateComment,API_BASE_URL
    } = useContext(DataContext);
    const [post, setPost] = useState(null);
    const loggedUserInitials = getInitials(loggedUser.name);
    const navigate = useNavigate();

    const location = useLocation();

    const { id } = useParams();
    const {
        state: {
            data: { currentPost },
        },
    } = useLocation();
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

    if (!post || !comments) return <p>Loading...</p>;

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
                    {" "}
                    Delete Post
                </button>
            </div>
           <div className="post-content">
           <h1 class="post-title">{post.title}</h1>
            <p>{post.body}</p>
           <br />
            {comments[post.id] ? (
                <CommentsLists
                    comments={comments[post.id] || []}
                    post={post}
                    update={updateComment}
                />
            ) : (
                <p>No comments yet...</p>
            )}
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
