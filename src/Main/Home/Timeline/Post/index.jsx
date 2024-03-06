function Post({ post }) {


    return(
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    )
}

export default Post