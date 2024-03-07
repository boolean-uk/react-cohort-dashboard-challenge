


function PostContent(post) {
  return (
    <div>
        <h3>{post.post.title}</h3>
        <p>{post.post.content}</p>
    </div>
  )
}

export default PostContent