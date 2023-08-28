import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Author from "../../../components/Author"
import Delimeter from "../../../components/Delimeter"
import UserBanner from "../../../components/UserBanner"
import CommentsList from "./CommentsList"
import NewCommentForm from "./NewCommentForm"

function PostHeader({ author, post }) {
  const { title, id } = post
  return (
    <div className='post-header'>
      <UserBanner name={author} />
      <Author author={author} />

      <Link to={`/posts/${id}`} state={{ post }}>
        <span className='title'>{title}</span>
      </Link>
    </div>
  )
}

function PostBody({ body }) {
  return (
    <p className='post-body'>{body}</p>
  )
}

export default function Post({ post, showAllComments }) {
  const [authorName, setAuthorName] = useState(null)
  const [comments, setComments] = useState(null)

  const updateComments = (newComment) => {
    setComments([newComment, ...comments])
  }

  async function getAuthorName() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    const json = await response.json()
    setAuthorName(json.name)
  }

  async function getComments() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    const json = await response.json()
    setComments(json)
  }

  useEffect(() => {
    getAuthorName()
    getComments()
  }, [])

  return (
    <div className='post box-container box-container-white'>
      {
        authorName && <PostHeader author={authorName} post={post} />
      }
      <PostBody body={post.body} />
      <Delimeter />
      {
        comments && <CommentsList comments={comments} showAllComments={showAllComments} />
      }
      <NewCommentForm postId={post.id} updateComments={updateComments} />
    </div>
  )
}