import '../../../styles/dashboard.css'
import UserBanner from "../../../components/UserBanner";
// import InputField from '../../../components/InputField';

function SubmitPostButton() {
  return (
    <button type='submit' className='post-button'>
      Post
    </button>
  )
}

export default function NewPostForm() {
  const handleSumbit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSumbit} className='new-post-form white-box'>
      <UserBanner />

      {/* <InputField type='text' placeholder="What's on your mind?" className='post-input' /> */}
      <input type='text' className='post-input' placeholder="What's on your mind?" />

      <SubmitPostButton />
    </form>
  )
}