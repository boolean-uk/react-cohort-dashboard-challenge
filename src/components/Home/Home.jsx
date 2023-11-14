import { useEffect, useState } from "react"
import Post from "../Post/Post"
import { baseURL } from "../../App"
import NewPost from "../Post/NewPost"

export default function Home() {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    
    const endpoint = "/post"

    fetch(baseURL + endpoint)
      .then(res => res.json())
      .then(data => setPosts(data.toReversed()))
  }

  useEffect(getPosts, []);
  
  if (posts.length === 0) return <p>Loading…</p>
  return (
    <>
    <NewPost />
    {posts.map((post, index) => <Post key={index} post={post}/>)}
    </>
  )
}