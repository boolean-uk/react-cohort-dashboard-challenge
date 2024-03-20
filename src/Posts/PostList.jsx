import PostListItem from "./PostListItem"

function PostList(props) {
  const {  posts, contacts } = props
  console.log('posts: ', posts);

  return (
    <ul className="post-list">
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} contacts={contacts} />
      ))}
    </ul>
  )
}

export default PostList