import { useContext } from "react"
import { useParams } from "react-router-dom"
import { AppDataContext } from "../App"
import Post from './post/Post.jsx'

function ViewPost() {
  const { id } = useParams()
  const context = useContext(AppDataContext)

  const post = context.posts.find((post) => post.id === id)
  
  return (
    <Post post={post} key={post.id}/>
  )
}

export default ViewPost