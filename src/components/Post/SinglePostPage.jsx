import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Post from "./Post"

export default function SinglePostPage () {
  const {id} = useParams()

  const [post, setPost] = useState({})

  const getPost = () => {
    const baseURL = "https://boolean-api-server.fly.dev/"
    const directory = "AllyDouillette" + "/post"
    const endpoint = `/${id}`

    fetch(baseURL + directory + endpoint)
      .then(res => res.json())
      .then(data => setPost(data))
  }

  useEffect(getPost, [])
  if (Object.keys(post) === 0) return <div>Loading…</div>
  
  return (
    <>
      <Post post={post} contactId={post.contactId}/>
    </>
  )
}