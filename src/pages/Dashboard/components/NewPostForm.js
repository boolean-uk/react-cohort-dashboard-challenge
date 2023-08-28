import '../../../styles/dashboard.css'
import UserBanner from "../../../components/UserBanner";

function InputFields() {

  return (
    <textarea
      className='post-input'
      placeholder="What's on your mind?"
    ></textarea>
  )
}

function SubmitPostButton() {
  return (
    <button type='submit' className='post-button'>
      Post
    </button>
  )
}

export default function NewPostForm() {
  const name = 'Alex Walker'
  const handleSumbit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSumbit} className='new-post-form box-container box-container-white'>
      <UserBanner name={name} />

      <InputFields />

      <SubmitPostButton />
    </form>
  )
}