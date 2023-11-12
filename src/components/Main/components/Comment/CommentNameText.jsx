function CommentNameText({ comment, commentAuthor }) {

    return (
        <div className="comment-name-text grid">
            <h5 className="comment-author-name">{commentAuthor.firstName} {commentAuthor.lastName}</h5>
            <p className="comment-content-text">{comment.content}</p>
        </div>
    )
}

export default CommentNameText