import { useState } from "react";
import postData from "../../../../js_functions/post"
import { useEffect } from "react";
import putData from "../../../../js_functions/put";

const initialForm = {
  title: "",
  content: "", 
  contactId: undefined
}

export default function PostForm({setReloadPostList, reloadPostList, reloadComments, setReloadComments, post, edit }) {
  const [form, setForm] = useState(initialForm)


  
  //allows the form to be set to the value of the comment we want to edit
  useEffect(() => post && setForm(post), [post])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title) {
      form.title = form.content.slice(0, 20) + "..."
    }
    edit ? putData(`post/${post.id}`, form) : postData("post", form) 
    setForm(initialForm)
    setReloadPostList(!reloadPostList)
    setReloadComments(!reloadComments)
  }

  const handleChange = (e) => { 
    edit ? setForm({...form, [e.target.name]: e.target.value}) : setForm({...form, [e.target.name]: e.target.value, ["contactId"]: 1})
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
        <button onClick={e => handleSubmit(e)}>{edit? "Edit":"Post"}</button>
      </form>
    </>
  );
}
