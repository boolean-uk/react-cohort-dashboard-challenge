function AddPostForm() {

    return (
        <form className="new-post-form grid">
            <label className="new-post-label" htmlFor="create-new-post">
                <input className="new-post-input"
                    type="text"
                    id="create-new-post"
                    name="create-new-post"
                    placeholder="What's on your mind?"
                    // value={}
                />
            </label>
            <button className="post-comment-button" type="submit">Post</button>
        </form> 
    )
}

export default AddPostForm