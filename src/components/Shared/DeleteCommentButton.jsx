function DeleteCommentButton({ comment, URL, post, setShouldGetComments}) {

    function handleDeleteComment() {
        const options = {
            method: 'DELETE'
        }
        fetch(`${URL}/post/${post.id}/comment/${comment.id}`, options)
            .then(res => res.json())
            .then(() => setShouldGetComments(true))
    }

    return (
        <button onClick={() => handleDeleteComment()} className="delete-comment-btn">Delete comment</button>

    )
}

export default DeleteCommentButton