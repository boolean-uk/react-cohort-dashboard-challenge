import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Post from "./Post"
import { baseURL } from "../../App"

export default function SinglePostPage () {
  const {id} = useParams()

  const [post, setPost] = useState(null)

  const getPost = () => {
    const endpoint = `/post/${id}`
    fetch(baseURL + endpoint)
      .then(res => res.json())
      .then(data => setPost(data))
  }

  useEffect(getPost, [])
  if (!post === true) return
  
  return (
    <>
      <Post post={post}/>
    </>
  )
}