import { useContext, useState } from "react"
import DataContext from "../../DataContext"

export default function NewPost() {
    const [postTitle, setPostTitle] = useState('')
    const [postMsg, setPostMsg] = useState('')
    const { posts, setPosts, thisPostId, setThisPostId } = useContext(DataContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        setPosts([{ userId: 1, id: thisPostId, title: postTitle, body: postMsg }, ...posts])
        setThisPostId(thisPostId+1)
    }

    return (
        <>
            <form className="new-post-info" onSubmit={handleSubmit}>
                <input className="new-post-title" type="text" name="postTitle" value={postTitle} onChange={event => setPostTitle(event.target.value)} placeholder="What's your post about?" />
                <input className='new-post-msg' type="text" name="postMsg" value={postMsg} onChange={event => setPostMsg(event.target.value)} placeholder="What's on your mind?" />
                <button className='new-post-button' type='submit'>Post</button>
            </form>
        </>
    )
}