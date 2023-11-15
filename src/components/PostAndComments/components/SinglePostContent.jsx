import UserProfileCircle from "../../Shared/UserProfileCircle"
import NameTitleContainer from "../../Main/components/Post/NameTitleContainer"
import DeletePostButton from "../../Shared/DeletePostButton"

function SinglePostContent({ post, URL, initials, author, setShouldGetPosts }) {

    return (
        <section className="post-content-container grid">
            <div className="post-content grid">
                <div className="post-content-details grid">
                    <UserProfileCircle initials={initials} author={author} />
                    <NameTitleContainer author={author} post={post} />
                </div>
                <div className="post-content-text">
                    <p>{post.content}</p>  
                </div>
            </div>
            <DeletePostButton post={post} URL={URL} setShouldGetPosts={setShouldGetPosts} />
        </section>
    )
}

export default SinglePostContent