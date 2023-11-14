import CommentForm from './CommentForm'
import CommentIcon from './CommentIcon'

function AddNewComment({loggedInUserInitials}) {
  return (
    <div className='comment'>
      <CommentIcon loggedInUserInitials={loggedInUserInitials}></CommentIcon>
      <CommentForm></CommentForm>
    </div>
  )
}

export default AddNewComment