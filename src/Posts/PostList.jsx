import PostListItem from "./PostListItem"

function PostList(props) {
  const {  posts, contacts } = props

  return (
    <ul className="post-list">
      {posts.map((post, index) => (
        <PostListItem key={index} post={post} contacts={contacts} />
      ))}
    </ul>
  )
}

export default PostList