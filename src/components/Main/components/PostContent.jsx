import UserProfileCircle from "../../Shared/UserProfileCircle"

function PostContent({ post, initials, author, userBgColour }) {

    return (
        <section className="post-content grid">
            <div className="post-content-details grid">
                <UserProfileCircle initials={initials} author={author} userBgColour={userBgColour}></UserProfileCircle>
                <div className="name-title-container grid">
                    <h3 className="author-name">{author.firstName} {author.lastName}</h3>
                    <h4 className="post-title">{post.title}</h4>
                </div>
            </div>
            <div className="post-content-text">
                <p>{post.content}</p>  
            </div>
        </section>
    )
}

export default PostContent