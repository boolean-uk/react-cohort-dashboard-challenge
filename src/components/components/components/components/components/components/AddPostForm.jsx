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
    postNewPost()
    setReloadPostList(true)
  }

  const handleChange = (e) => { 
    setForm({...form, ["contactId"]: 1})
    form.contactId && setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <>
      <form>
        <input 
          onChange={e => handleChange(e)} 
          value={form.content} 
          name="content"
          type="text"/>
        <button onClick={e => handleSubmit(e)}>Post</button>
      </form>
    </>
  );
}
