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
  const handleSumbit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSumbit} className='new-comment-form'>
      <UserBanner />

      <input type='text' className='comment-input' placeholder='Add a comment...' />

      <SubmitCommentButton />
    </form>
  )
}
