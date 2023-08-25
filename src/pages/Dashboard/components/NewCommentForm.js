import SendIcon from "../../../components/SendIcon";
import UserBanner from "../../../components/UserBanner";

function SubmitCommentButton() {
  return (
    <button type='submit' className='comment-button'>
      <SendIcon/>
    </button>
  )
}

export default function NewCommentForm() {
  const name = 'Alex Walker'  /** TODO: retrieve user's name */

  const handleSumbit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSumbit} className='new-comment-form'>
      <UserBanner name={name} />

      <input type='text' className='comment-input' placeholder='Add a comment...' />

      <SubmitCommentButton />
    </form>
  )
}
