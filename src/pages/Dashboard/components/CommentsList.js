import { useState, useEffect, useContext } from "react"
import UserBanner from "../../../components/UserBanner"
import Actions from "../../../components/Actions"
import DataContext from "../../../DataContext"

function LoadMoreButton({ setShowAll }) {
  const handleLoadMoreComments = (event) => {
    // event.preventDefault()
    setShowAll(true)
  }

  return (
    <button onClick={handleLoadMoreComments} className='load-more-button'>
      See previous comments
    </button>
  )
}

function CommentBody({ id, author, body, handleDelete }) {
  return (
    <div className='comment-body box-container box-container-colored'>
      <Actions id={id} author={author} handleDelete={handleDelete} />
      <p>{body}</p>
    </div>
  )
}

function Comment({ comment, handleDelete }) {
  const [author, setAuthor] = useState(null)

  async function getAuthor() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${comment.userId}`)
    const json = await response.json()
    setAuthor(json)
  }

  useEffect(() => {
    getAuthor()
  }, [])

  return (
    author &&
      <div className='comment'>
        <UserBanner name={author.name} id={author.id} />
        <CommentBody id={comment.id} author={author} body={comment.body} handleDelete={handleDelete} />
      </div>
  )
}

export default function CommentsList({ comments, showAllComments, handleDelete }) {
  const [showAll, setShowAll] = useState(showAllComments || comments.length <= 3)
  
  if (!showAll)
    comments = comments.slice(0,3)

  return (
    <div className='comments-list'>
      {!showAll && <LoadMoreButton setShowAll={setShowAll} />}

      {comments.map(comment =>
        <Comment comment={comment} handleDelete={handleDelete} key={comment.id} />
      )}
      
    </div>
  )
}
