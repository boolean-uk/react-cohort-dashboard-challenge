import { useContext, useEffect } from 'react'
import { AppContext } from '../App'
import Post from './Post'
import CreatePost from './CreatePost'

export default function Posts() {
  const { posts } = useContext(AppContext)
  return (
    <>
      <CreatePost />
      {/* Reverse the order so new posts are at top */}
      {posts.map((post, index) => (
      <Post post={post} key={index} index={index} ></Post>
      ))}
    </>


  )
}
