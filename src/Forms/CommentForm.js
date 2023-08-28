import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { generateCommentId, getInitials } from "../Utils";
import DataContext from "../DataContext";


function CommentForm(props) {
    const { loggedUser, setComments, updateComment, requiredFieldError, setRequiredFieldError,API_BASE_URL } = useContext(DataContext);
    const { comments, post, editingComment, setEditingComment } = props; 
    const initialState = {
        postId: post.id,
        userId: "",
        id: "",
        name: "",
        email: "",
        body: "",
    };

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
        if ( !formData.body ) {
            setRequiredFieldError(true);
            return;
        } else {
            setRequiredFieldError(false);
        }
        if (editingComment) {
            updateAnswer(formData);
            updateComment(post.id, formData); 
            setEditingComment(null); 
        } else {
            createAnswer(formData);
        }
        setFormData(initialState);
    };

  
    const updateAnswer = (answerData) => {
        fetch(
            `${API_BASE_URL}/comments/${editingComment.id}`,
            {
                method: "PUT",
                body: JSON.stringify(answerData),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }
        )
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
    const createAnswer = (answerData) => {
        const updatedAnswerData = {
            ...answerData,
            userId: loggedUser.id,
            id: generateCommentId()

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
                    console.log(
                        `Comments list of post: ${post.id} with new comment:`,
                        comments
                    );
                    return updatedComments;
                });
            });
       
    };
    return (
        <div class="add-comment">
            <div class="comment-circle-own">
                <Link
                    to={`/view/profile/${loggedUser.id}`}
                    style={{ textDecoration: "none" }}
                >
                    {getInitials(loggedUser.name)}{" "}
                </Link>
            </div>

            <form className="comment-form" onSubmit={handleSubmit}>
                <div className="comment-input-container">
                {requiredFieldError && (
                            <p class="error">
                               Required field
                            </p>
                        )}
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
