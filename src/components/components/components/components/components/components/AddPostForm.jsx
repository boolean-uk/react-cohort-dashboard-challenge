import { useState } from "react";


const initialForm = {
  title: "",
  content: "", 
  contactId: undefined
}

export default function AddPostForm({setReloadPostList, reloadPostList}) {
  const [form, setForm] = useState(initialForm)



  // simulating a logged in user
  // const loggedInUserId = 1

  const postNewPost = () => {
    const options = {
      method: "POST",
      headers: {"content-type":"application/json"},
      body: JSON.stringify(form)
    }

    fetch("https://boolean-api-server.fly.dev/Chloe070196/post", options)
    .then(r => r.json())
    .catch(error => console.log(error))
    setForm(initialForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // if (!form.title) {
    //   form.title = form.content.slice(0, 20) + "..."
    // }
    postNewPost()
    setReloadPostList(true)
  }

  const handleChange = (e) => { 
    setForm({...form, [e.target.name]: e.target.value, ["contactId"]: 1})
    console.log(form)
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
