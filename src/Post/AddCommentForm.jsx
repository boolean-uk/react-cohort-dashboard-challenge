import { useState } from "react"
import postData from "../../js_functions/post"
const initialForm = {
  title: "",
  postId: undefined,
  contactId: undefined,
  content: ""
}

export default function AddCommentForm({setReloadComments, post}) {
  const [form, setForm] = useState(initialForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    postData(`post/${post.id}/comment/`, form)
    setForm(initialForm)
    setReloadComments(true)
  }

  const handleChange = (e) => { 
    setForm({...form, [e.target.name]: e.target.value, ["contactId"]: 1, ["postId"]: post.id})
  }

  return (
    <>
      <form className="add-comment-form">
        <input 
          onChange={e => handleChange(e)} 
          value={form.content} 
          name="content"
          type="text"/>
        <button className="round-container justify-right comment-button" onClick={e => handleSubmit(e)}>Post</button>
      </form>
    </>
  );
}
