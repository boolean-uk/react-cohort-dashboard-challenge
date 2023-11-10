import { useEffect } from "react"
import { useState } from "react"

import Post from "../Post/Post"

export default function Home() {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    const baseURL = "https://boolean-api-server.fly.dev"
    const directory = "/AllyDouillette"
    const endpoint = "/post"

    console.log(baseURL + directory + endpoint)

    fetch(baseURL + directory + endpoint)
      .then(res => res.json())
      .then(data => setPosts(data))
  }

  
  useEffect(getPosts, []);
  
  if (posts.length === 0) {
    return <p>Loading…</p>
  } else {
  return (
    <>
    {posts.map((post, index) => <Post key={index} post={post}/>)}
    </>
  )
  }
}