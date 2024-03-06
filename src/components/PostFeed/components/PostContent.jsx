

function PostContent(post) {
  return (
    <div>
        <p>test</p>
        <h3>{post.post.title}</h3>
        <p>{post.post.content}</p>
    </div>
  )
}

export default PostContent