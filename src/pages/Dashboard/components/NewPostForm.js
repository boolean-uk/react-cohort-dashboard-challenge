import '../../../styles/dashboard.css'
import UserBanner from "../../../components/UserBanner";

export default function NewPostForm() {
  
  return (
    <div className='new-post-form'>
      <UserBanner />

      <input type='text' className='post-input' placeholder="What's on your mind?" />

      <button className='post-button'>
        Post
      </button>
    </div>
  )
}