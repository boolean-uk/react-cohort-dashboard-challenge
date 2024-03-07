import { useContext, useEffect } from 'react'
import { AppContext } from '../App'
import Post from './Post'
import CreatePost from './CreatePost'

export default function Posts() {
  const { posts } = useContext(AppContext)
  return (
    <main className="main main-background">

      <CreatePost />
      {posts.map((post, index) => (
      <Post post={post} key={index} index={index} ></Post>
      ))}
  </main>
  )
}
