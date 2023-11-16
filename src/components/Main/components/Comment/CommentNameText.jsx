import { useNavigate } from "react-router-dom"

function CommentNameText({ comment, commentAuthor }) {

    const navigate = useNavigate()

    return (
        <div className="comment-name-text-container grid">
            <div className="comment-name-text">
                <h5 className="comment-author-name" onClick={() => navigate(`/profile/${commentAuthor.id}`)}>{commentAuthor.firstName} {commentAuthor.lastName}</h5>
                <p className="comment-content-text">{comment.content}</p>
            </div>
        </div>
    )
}

export default CommentNameText