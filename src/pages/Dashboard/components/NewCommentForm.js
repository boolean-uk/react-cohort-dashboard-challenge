import { useContext, useState } from "react";
import SendIcon from "../../../components/SendIcon";
import UserBanner from "../../../components/UserBanner";
import DataContext from "../../../DataContext";

function SubmitCommentButton() {
  return (
    <button type='submit' className='comment-button'>
      <SendIcon/>
    </button>
  )
}

export default function NewCommentForm({ postId, updateComments }) {
  const [formData, setFormData] = useState('')
  const { user } = useContext(DataContext)

  const handleChange = event => setFormData(event.target.value)

  const handleSumbit = (event) => {
    event.preventDefault()
    setFormData('')

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        body: formData,
        postId: postId,
        /** TODO: insert as well:
         * "name": "id labore ex et quam laborum",
         */
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => updateComments(json))
  }

  return (
    <form onSubmit={handleSumbit} className='new-comment-form'>
      <UserBanner name={user.name} />

      <input
        name='newComment'
        type='text'
        value={formData}
        className='comment-input'
        placeholder='Add a comment...'
        onChange={handleChange}
      />

      <SubmitCommentButton />
    </form>
  )
}
