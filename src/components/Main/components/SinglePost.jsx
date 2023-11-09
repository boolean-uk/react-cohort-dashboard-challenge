function SinglePost({ post }) {

    return (
        <section className="single-post">
            <li>
                <h3>Name</h3>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
            </li>
        </section>
    )
}

export default SinglePost