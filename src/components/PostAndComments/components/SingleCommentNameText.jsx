function SingleCommentNameText({ comment, commentAuthor, URL, post, setShouldGetComments }) {

    function handleDeleteComment() {
        const options = {
            method: 'DELETE'
        }
        fetch(`${URL}/post/${post.id}/comment/${comment.id}`, options)
            .then(res => res.json())
            .then(() => setShouldGetComments(true))
    }

    return (
        <div className="comment-name-text-container grid">
            <div className="comment-name-text">
                <h5 className="comment-author-name">{commentAuthor.firstName} {commentAuthor.lastName}</h5>
                <p className="comment-content-text">{comment.content}</p>
            </div>
            <button onClick={() => handleDeleteComment()} className="delete-comment-btn">Delete comment</button>
        </div>
    )
}

export default SingleCommentNameText