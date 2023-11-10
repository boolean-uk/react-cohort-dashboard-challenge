function PostContent({ post, author, loggedInUserColour }) {

    const initials = author.firstName.slice(0, 1) + author.lastName.slice(0, 1)

    return (
        <section className="post-content grid">
            <div className="post-content-details grid">
                <div className={`${loggedInUserColour(author)} profile-circle grid`}>
                    <p className="initials-text">{initials}</p>
                </div>
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