import UserProfileCircle from "../../../Shared/UserProfileCircle"
import NameTitleContainer from "./NameTitleContainer"

function PostContent({ post, initials, author }) {

    return (
        <section className="post-content grid">
            <div className="post-content-details grid">
                <UserProfileCircle initials={initials} author={author} />
                <NameTitleContainer author={author} post={post} />
            </div>
            <div className="post-content-text">
                <p>{post.content}</p>  
            </div>
        </section>
    )
}

export default PostContent