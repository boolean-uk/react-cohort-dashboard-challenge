import Post from "./Post"

export default function PostFeed() {
  const post = {
    author: 'Sam Fletcher',
    title: 'Mauris consequat porta urna, non aliquet leo.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie turpis magna, vel placerat purus varius dapibus. Fusce consequat ligula lacus. Suspendisse convallis ultrices justo, et auctor urna placerat eleifend.'
  }

  return (
    <div className='post-feed'>
      <Post post={post} />
    </div>
  )
}