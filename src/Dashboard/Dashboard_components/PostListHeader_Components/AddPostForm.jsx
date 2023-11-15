import { useState } from "react";
import postData from "../../../../js_functions/post"

const initialForm = {
  title: "",
  content: "", 
  contactId: undefined
}

export default function AddPostForm({setReloadPostList, reloadPostList, reloadComments, setReloadComments}) {
  const [form, setForm] = useState(initialForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title) {
      form.title = form.content.slice(0, 20) + "..."
    }
    postData("post", form)
    setForm(initialForm)
    setReloadPostList(!reloadPostList)
    setReloadComments(!reloadComments)
  }

  const handleChange = (e) => { 
    setForm({...form, [e.target.name]: e.target.value, ["contactId"]: 1})
  }

  return (
    <>
      <form>
        <input 
          onChange={e => handleChange(e)} 
          value={form.title} 
          name="title"
          type="text"
          placeholder="What is it about?"/>
        <textarea 
          onChange={e => handleChange(e)} 
          value={form.content} 
          name="content"
          type="text"
          placeholder="Share your thoughts!"/>
        <button onClick={e => handleSubmit(e)}>Post</button>
      </form>
    </>
  );
}
