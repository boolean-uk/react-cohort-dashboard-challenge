import UserProfileCircle from "../../Shared/UserProfileCircle"
import NameTitleContainer from "../../Main/components/Post/NameTitleContainer"

function SinglePostContent({ post, initials, author}) {

    return (
        <section>
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

export default SinglePostContent