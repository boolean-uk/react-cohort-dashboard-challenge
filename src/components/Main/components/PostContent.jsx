function PostContent({ post, author }) {

    const initials = author.firstName.slice(0, 1) + author.lastName.slice(0, 1)

    return (
        <section className="post-content grid">
            <div>{initials}</div>
            <h3>{author.firstName} {author.lastName}</h3>
            <h4>{post.title}</h4>
            <p>{post.content}</p>  
        </section>
    )
}

export default PostContent