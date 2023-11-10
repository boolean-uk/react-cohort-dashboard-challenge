import { useEffect } from "react"
import { useState } from "react"

import Post from "../Post/Post"

export default function Home() {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    const baseURL = "https://boolean-api-server.fly.dev"
    const directory = "/AllyDouillette"
    const endpoint = "/post"

    fetch(baseURL + directory + endpoint)
      .then(res => res.json())
      .then(data => setPosts(data))
      .then((data) => console.log("loaded posts in Home!", posts))
  }

  useEffect(getPosts, [])

  return (
    <>
    {posts.map((post, index) => <Post key={index} post={post}/>)}
    </>
  )
}