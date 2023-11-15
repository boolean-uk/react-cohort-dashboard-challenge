function CommentNameText({ comment, commentAuthor }) {

    return (
        <div className="comment-name-text-container grid">
            <div className="comment-name-text">
                <h5 className="comment-author-name">{commentAuthor.firstName} {commentAuthor.lastName}</h5>
                <p className="comment-content-text">{comment.content}</p>
            </div>
            <button className="delete-comment-btn">Delete comment</button>
        </div>
    )
}

export default CommentNameText