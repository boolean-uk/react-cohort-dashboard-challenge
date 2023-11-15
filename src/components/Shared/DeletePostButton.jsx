function DeletePostButton({ post, URL, setShouldGetPosts }) {

    function handleDelete() {
        const options = {
            method: 'DELETE'
        }
        fetch(`${URL}/post/${post.id}`, options)
            .then(res => res.json())
            .then(() => setShouldGetPosts(true))
    }

    return (
        <button className="post-content-delete-btn" onClick={() => handleDelete()}>Delete Post</button>
    )

}

export default DeletePostButton