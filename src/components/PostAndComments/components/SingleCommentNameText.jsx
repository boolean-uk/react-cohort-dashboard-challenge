import { useNavigate } from "react-router-dom"
import DeleteCommentButton from "../../Shared/DeleteCommentButton"

function SingleCommentNameText({ comment, commentAuthor, URL, post, setShouldGetComments }) {

    const navigate = useNavigate()

    return (
        <div className="comment-name-text-container grid">
            <div className="comment-name-text">
                <h5 className="comment-author-name" onClick={() => navigate(`/profile/${commentAuthor.id}`)}>{commentAuthor.firstName} {commentAuthor.lastName}</h5>
                <p className="comment-content-text">{comment.content}</p>
            </div>
            <DeleteCommentButton comment={comment} URL={URL} post={post} setShouldGetComments={setShouldGetComments} />
        </div>
    )
}

export default SingleCommentNameText