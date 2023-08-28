import Post from "./Post"

export default function PostFeed({ posts }) {

  return (
    <div className='post-feed'>
      {posts.map(post =>
        <Post post={post} key={post.id} />
      )}
    </div>
  )
}