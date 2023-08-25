import SendIcon from "../../../components/SendIcon";
import UserBanner from "../../../components/UserBanner";

function SubmitCommentButton() {
  return (
    <div className='comment-button'>
      <SendIcon/>
    </div>
  )
}

export default function NewCommentForm() {
  return (
    <div className='new-comment-form'>
      <UserBanner />

      <input type='text' className='comment-input' placeholder='Add a comment...' />

      <SubmitCommentButton />
    </div>
  )
}
