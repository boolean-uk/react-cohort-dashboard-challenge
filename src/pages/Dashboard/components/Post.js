import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import Actions from "../../../components/Actions"
import Delimeter from "../../../components/Delimeter"
import UserBanner from "../../../components/UserBanner"
import CommentsList from "./CommentsList"
import NewCommentForm from "./NewCommentForm"
import DataContext from "../../../DataContext"
import getRandomUserId from "../../../utilities/getRandomUserId"

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

  const deleteComment = (id) => {
    // delete resource
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: 'DELETE',
    })
    // update comments state as well
    const index = comments.findIndex(post => post.id === id)
    const newComments = [...comments]
    newComments.splice(index, 1)
    setComments(newComments)
  }

  async function getAuthorName() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    const json = await response.json()
    setAuthor(json)
  }

  async function getComments() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    const json = await response.json()
    // assign a random userId to each comment
    json.forEach(comment => comment.userId = getRandomUserId())
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
        comments && <CommentsList comments={comments} showAllComments={showAllComments} handleDelete={deleteComment} />
      }
      <NewCommentForm postId={post.id} updateComments={updateComments} />
    </div>
  )
}