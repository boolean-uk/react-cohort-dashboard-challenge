import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import Actions from "../../../components/Actions"
import Delimeter from "../../../components/Delimeter"
import UserBanner from "../../../components/UserBanner"
import CommentsList from "./CommentsList"
import NewCommentForm from "./NewCommentForm"
import DataContext from "../../../DataContext"

function PostHeader({ author, post }) {
  const { title, id } = post
  const { deletePost } = useContext(DataContext)

  return (
    <div className='post-header'>
      <UserBanner name={author.name} id={author.id} />

      <div className='post-header-div'>
        <Actions id={id} author={author} handleDelete={deletePost} />
        <Link to={`/posts/${id}`} state={{ post }}>
          <span className='title'>{title}</span>
        </Link>
      </div>
     
    </div>
  )
}

function PostBody({ body }) {
  return (
    <p className='post-body'>{body}</p>
  )
}

export default function Post({ post, showAllComments }) {
  const [author, setAuthor] = useState(null)
  const [comments, setComments] = useState(null)

  const updateComments = (newComment) => {
    setComments([newComment, ...comments])
  }

  async function getAuthorName() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    const json = await response.json()
    setAuthor(json)
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
        author && <PostHeader author={author} post={post} />
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