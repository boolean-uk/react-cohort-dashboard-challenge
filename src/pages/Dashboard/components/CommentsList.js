import Author from "../../../components/Author"
import UserBanner from "../../../components/UserBanner"

// function LoadMoreButton() {
//   const handleLoadMoreComments = (event) => {
//     // event.preventDefault()
//   }
//   return (
//     <button onClick={handleLoadMoreComments} className='load-more-button'>
//       See previous comments
//     </button>
//   )
// }

function CommentContent({ author, content }) {
  return (
    <div className='comment-content box-container box-container-colored'>
      <Author author={author} />
      <p>{content}</p>
    </div>
  )
}

function Comment({ comment }) {

  return (
    <div className='comment'>
      <UserBanner />
      <CommentContent author={comment.author} content={comment.content} />
    </div>
  )
}

export default function CommentsList({ comments }) {
  
  return (
    <div className='comments-list'>
      {/* {comments.length > 3 && <LoadMoreButton />} */}

      {comments.map(comment =>
        <Comment comment={comment} />
      )}
      
    </div>
  )
}