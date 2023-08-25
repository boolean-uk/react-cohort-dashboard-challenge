export default function NewPost() {
    return (
        <>
            <form className="new-post-info">
                <input className="new-post-title" type="text" placeholder="What's your post about?" />
                <input className='new-post-msg' type="text" placeholder="What's on your mind?" />
                <button className='new-post-button' type='submit'>Post</button>
            </form>
        </>
    )
}