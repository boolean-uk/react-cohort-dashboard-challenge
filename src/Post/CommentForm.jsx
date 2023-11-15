import { useState } from "react"
import postData from "../../js_functions/post"
import { useEffect } from "react"
const initialForm = {
  title: "",
  postId: undefined,
  contactId: undefined,
  content: ""
}

export default function CommentForm({setReloadComments, comment}) {
  const [form, setForm] = useState(initialForm)


  //allows the form to be set to the value of the comment we want to edit
  useEffect(() => comment && setForm(comment), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    postData(`post/${post.id}/comment/`, form)
    console.log(form.contactId)
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
          className="comment-form"
          onChange={e => handleChange(e)} 
          value={form.content} 
          name="content"
          type="text"/>
        <button className="round-container justify-right comment-button" onClick={e => handleSubmit(e)}>Post</button>
      </form>
    </>
  );
}
