import { Link } from "react-router-dom";
import { getInitials } from "../../Utils";
import { useContext, useState } from "react";
import DataContext from "../../DataContext";
import CommentForm from "../../Forms/CommentForm";


function Comment(props) {
    const { comment, user, post, updateComment } = props;
    const { deleteComment } = useContext(DataContext);
    const [editingComment, setEditingComment] = useState(null);

    const handleEditClick = () => {
        setEditingComment(comment);
    };
    const handleDeleteClick = () => {
        deleteComment(post.id, comment.id);
    };
    const userInitials = getInitials(user.name);
    return (
        <li key={comment.id}>
            <div class="comment">
                <Link to={`/view/profile/${user.id}`} style={{ textDecoration: 'none' }}>
                    <div class="comment-circle">{userInitials}</div>
                </Link>
                <div>
                    <div class="comment-author">{user.name}</div>
                    {editingComment && editingComment.id === comment.id ? (
                        <CommentForm
                            editingComment={editingComment}
                            setEditingComment={setEditingComment}
                            post={post}
                            updateComment={updateComment}
                        />
                    ) : (
                        <div class="comment-content">{comment.body}</div>
                    )}
                     <div class="comment-buttons">
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={handleDeleteClick} class="delete-button">Delete</button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Comment;
