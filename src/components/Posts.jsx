import { useContext } from 'react'
import { AppContext } from '../App'
import Post from './Post'

export default function Posts() {
  const { posts } = useContext(AppContext)

  return (
    <main className="main green">
      {posts.map((post, index) => (
      <Post post={post} key={index} index={index} ></Post>
      ))}
  </main>
  )
}
