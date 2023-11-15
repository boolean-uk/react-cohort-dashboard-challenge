import { useEffect, useState } from "react"
import Post from "../Post/Post"
import { baseURL } from "../../App"
import NewPost from "../Post/NewPost"

export default function Home() {
  const [posts, setPosts] = useState([])
  const [reload, setReload] = useState(true)

  const getPosts = () => {
    
    const endpoint = "/post"

    fetch(baseURL + endpoint)
      .then(res => res.json())
      .then(data => setPosts(data.toReversed()))
  }

  useEffect(() => reload ? getPosts : console.log("all up to date"));
  
  if (posts.length === 0) return <p>Loading…</p>
  return (
    <>
    <NewPost getPosts={getPosts}/>
    {posts.map((post, index) => <Post key={index} post={post} setReload={setReload}/>)}
    </>
  )
}