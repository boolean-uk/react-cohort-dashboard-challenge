import Post from "./Post"

export default function PostFeed() {
  const posts = [
    {
      author: 'Sam Fletcher',
      title: 'Mauris consequat porta urna, non aliquet leo.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie turpis magna, vel placerat purus varius dapibus. Fusce consequat ligula lacus. Suspendisse convallis ultrices justo, et auctor urna placerat eleifend.'
    },
    {
      author: 'Dolor Lobortis',
      title: 'Nunc accumsan blandit metus a pulvinar',
      content: 'Nullam sit amet sodales est, at mattis arcu. Maecenas ut mollis sapien. Vestibulum justo arcu.',
      comments: [
        {
          author: 'Rutrum Augue',
          content: 'Duis facilisis condimentum massa, ac venenatis enim malesuada interdum. Suspendisse.'
        },
        {
          author: 'Dana Nunc',
          content: 'Vivamus sed mollis est. Vestibulum ut augue magna.'
        }
      ]
    }
  ]

  return (
    <div className='post-feed'>
      {posts.map(post =>
        <Post post={post} />
      )}
    </div>
  )
}