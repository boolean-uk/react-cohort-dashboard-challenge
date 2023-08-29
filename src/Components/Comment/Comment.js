import { useContext, useState } from "react";
import DataContext from "../../DataContext";
import CommentUserIcon from "./CommentUserIcon";
import CommentButtons from "./CommentButtons";
import CommentForm from "../../Forms/CommentForm/CommentForm";

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

    return (
        <li key={comment.id}>
            <div class="comment">
                <CommentUserIcon user={user} />
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
                    <CommentButtons
                        handleDeleteClick={handleDeleteClick}
                        handleEditClick={handleEditClick}
                    />
                </div>
            </div>
        </li>
    );
}

export default Comment;
