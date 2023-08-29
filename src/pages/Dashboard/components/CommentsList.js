import { useState, useEffect } from "react"
import UserBanner from "../../../components/UserBanner"
import getRandomUserId from "../../../utilities/getRandomUserId"
import Actions from "../../../components/Actions"

function LoadMoreButton({ setShowAll }) {
  /** TODO: implement logic of loading all comments */
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

function CommentBody({ author, body }) {
  return (
    <div className='comment-body box-container box-container-colored'>
      <Actions author={author} />
      <p>{body}</p>
    </div>
  )
}

function Comment({ comment }) {
  const [author, setAuthor] = useState(null)

  async function getAuthor() {
    const randomUserId = getRandomUserId()
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomUserId}`)
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
        <CommentBody author={author} body={comment.body} />
      </div>
  )
}

export default function CommentsList({ comments, showAllComments }) {
  const [showAll, setShowAll] = useState(showAllComments || comments.length <= 3)
  
  if (!showAll)
    comments = comments.slice(0,3)

  return (
    <div className='comments-list'>
      {!showAll && <LoadMoreButton setShowAll={setShowAll} />}

      {comments.map(comment =>
        <Comment comment={comment} key={comment.id} />
      )}
      
    </div>
  )
}
