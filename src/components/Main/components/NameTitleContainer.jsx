function NameTitleContainer({ author, post }) {

    return (
        <div className="name-title-container grid">
            <h3 className="author-name">{author.firstName} {author.lastName}</h3>
            <h4 className="post-title">{post.title}</h4>
        </div>
    )
}

export default NameTitleContainer