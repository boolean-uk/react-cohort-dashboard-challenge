import { useEffect, useState } from "react"
import Author from "../../../components/Author"
import Delimeter from "../../../components/Delimeter"
import UserBanner from "../../../components/UserBanner"
import CommentsList from "./CommentsList"
import NewCommentForm from "./NewCommentForm"

function PostHeader({ author, title }) {
  return (
    <div className='post-header'>
      <UserBanner name={author} />
      <Author author={author} />
      <p className='title'><strong>{title}</strong></p>
    </div>
  )
}

function PostBody({ body }) {
  return (
    <p className='post-body'>{body}</p>
  )
}

export default function Post({ post }) {
  const [authorName, setAuthorName] = useState(null)
  const [comments, setComments] = useState(null)

  async function getAuthorName() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    const json = await response.json()
    setAuthorName(json.name)
  }

  async function getComments() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    const json = await response.json()
    setComments(json.splice(0,3))     // TODO: save all comments
  }

  useEffect(() => {
    getAuthorName()
    getComments()
  }, [])

  return (
    <div className='post box-container box-container-white'>
      {
        authorName && <PostHeader author={authorName} title={post.title} />
      }
      <PostBody body={post.body} />
      <Delimeter />
      {
        comments && <CommentsList comments={comments} />
      }
      <NewCommentForm />
    </div>
  )
}