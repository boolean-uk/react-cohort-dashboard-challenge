import React, { useState } from "react";
import Avatar from "../user/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import '../../styling/commentForm.css'

interface CommentFormProps {
    postId: number;
    onAddComment: (postId: number, comment: string) => void;
}

const CommentForm = ({ postId, onAddComment }: CommentFormProps) => {
    const [commentContent, setCommentContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (commentContent.trim()) {
            onAddComment(postId, commentContent);
        }
        setCommentContent("");
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <Avatar />
            <textarea
                className="comment-input"
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="Add a comment..."
                rows={3}
                required
            />
            <button className="comment-button" type="submit">
                <FontAwesomeIcon className="comment-icon" icon={faPaperPlane} />
            </button>
        </form>
    );
};

export default CommentForm;