import UserProfileCircle from "../../../Shared/UserProfileCircle"
import NameTitleContainer from "./NameTitleContainer"

function PostContent({ post, URL, initials, author, setShouldGetPosts }) {

    function handleDelete() {
        const options = {
            method: 'DELETE'
        }
        fetch(`${URL}/post/${post.id}`, options)
            .then(res => res.json())
            .then(() => setShouldGetPosts(true))
    }

    return (
        <section className="post-content grid">
            <div className="post-content-details grid">
                <UserProfileCircle initials={initials} author={author} />
                <NameTitleContainer author={author} post={post} />
            </div>
            <div className="post-content-text">
                <p>{post.content}</p>  
            </div>
            <button onClick={() => handleDelete()}>Delete Post</button>
        </section>
    )
}

export default PostContent