import { useState } from "react"
import postData from "../../js_functions/post"
import { useEffect } from "react"
import putData from "../../js_functions/put"
const initialForm = {
  title: "",
  postId: undefined,
  contactId: undefined,
  content: ""
}

export default function CommentForm({setReloadComments, reloadComments, edit, setEdit, comment, post, postId}) {
  const [form, setForm] = useState(initialForm)


  //allows the form to be set to the value of the comment we want to edit
  useEffect(() => comment && setForm(comment), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    edit ? putData(`post/${postId}/comment/${comment.id}`, form): postData(`post/${post.id}/comment/`, form)
    setForm(initialForm)
    setEdit(!edit)
    setReloadComments(!reloadComments)
  }

  const handleChange = (e) => { 
    edit? setForm({...form, [e.target.name]: e.target.value, ["contactId"]: 1, ["postId"]: postId}) :
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
