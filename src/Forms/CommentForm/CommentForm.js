import { useContext, useEffect, useState } from "react";
import DataContext from "../../DataContext";
import CommentCircleIcon from "./CommentCircleIcon";
import RequiredFieldWarning from "./RequiredFieldWarning";

function CommentForm(props) {
    const { loggedUser, setComments, updateComment, API_BASE_URL } =
        useContext(DataContext);

    const { post, editingComment, setEditingComment } = props;

    const initialState = {
        postId: post.id,
        userId: "",
        id: "",
        name: "",
        email: "",
        body: "",
    };

    const [requiredCommentFieldError, setRequiredCommentFieldError] =
        useState(false);

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (editingComment) {
            setFormData(editingComment);
        } else {
            setFormData(initialState);
        }
    }, [editingComment]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.body) {
            setRequiredCommentFieldError(true);
            return;
        } else {
            setRequiredCommentFieldError(false);
        }
        if (editingComment) {
            updateData(formData);
            updateComment(post.id, formData);
            setEditingComment(null);
        } else {
            createData(formData);
        }
        setFormData(initialState);
    };

    const updateData = (answerData) => {
        fetch(`${API_BASE_URL}/comments/${editingComment.id}`, {
            method: "PUT",
            body: JSON.stringify(answerData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((updatedComment) => {
                setComments((prevComments) => ({
                    ...prevComments,
                    [post.id]: prevComments[post.id].map((comment) =>
                        comment.id === updatedComment.id
                            ? { ...comment, ...updatedComment }
                            : comment
                    ),
                }));
                setEditingComment(null);
                setFormData(initialState);
            })
            .catch((error) => {
                console.error("Error updating comment:", error);
            });
    };

    const createData = (answerData) => {
        const updatedAnswerData = {
            ...answerData,
            userId: loggedUser.id,
        };
        fetch(`${API_BASE_URL}/comments`, {
            method: "POST",
            body: JSON.stringify(updatedAnswerData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((newComment) => {
                setComments((prevComments) => {
                    const updatedComments = {
                        ...prevComments,
                        [post.id]: [
                            ...(prevComments[post.id] || []),
                            newComment,
                        ],
                    };
                    return updatedComments;
                });
            });
    };

    return (
        <div class="add-comment">
            <CommentCircleIcon />
            <form className="comment-form" onSubmit={handleSubmit}>
                <div className="comment-input-container">
                    <RequiredFieldWarning
                        requiredCommentFieldError={requiredCommentFieldError}
                    />
                    <input
                        type="text"
                        placeholder="Add your comment"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                    />
                    <button class="submit-button">&rarr;</button>
                </div>
            </form>
        </div>
    );
}

export default CommentForm;
