import '../../../styles/dashboard.css'
import UserBanner from "../../../components/UserBanner";
// import InputField from '../../../components/InputField';

function SubmitPostButton() {
  return (
    <button className='post-button'>
      Post
    </button>
  )
}

export default function NewPostForm() {
  
  return (
    <div className='new-post-form white-box'>
      <UserBanner />

      {/* <InputField type='text' placeholder="What's on your mind?" className='post-input' /> */}
      <input type='text' className='post-input' placeholder="What's on your mind?" />

      <SubmitPostButton />
    </div>
  )
}