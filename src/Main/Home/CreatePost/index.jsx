function CreatePost() {
    return(
        <div className="create-post">
            <form>
                <input type="text" placeholder="What's on your mind?" />
                <button>Post</button>
            </form>
        </div>
    )
}

export default CreatePost