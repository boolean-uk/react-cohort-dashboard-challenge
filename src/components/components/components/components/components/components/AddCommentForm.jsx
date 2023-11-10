import { useState } from "react"
const initialForm = {
  title: "",
  postId: undefined,
  contactId: undefined,
  content: ""
}

export default function AddCommentForm({setReloadPostList, reloadPostList, post}) {
  const [form, setForm] = useState(initialForm)

  // simulating a logged in user
  // const loggedInUserId = 1

  const postNewComment = () => {
    const options = {
      method: "POST",
      headers: {"content-type":"application/json"},
      body: JSON.stringify(form)
    }

    fetch(`https://boolean-api-server.fly.dev/Chloe070196/post/${post.id}/comment/`, options)
    .then(r => r.json())
    .catch(error => console.log(error))
    setForm(initialForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postNewComment()
    setReloadPostList(true)
  }

  const handleChange = (e) => { 
    setForm({...form, ["contactId"]: 1, ["postId"]: post.id})
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
        <button className="round-container justify-right" onClick={e => handleSubmit(e)}>Post</button>
      </form>
    </>
  );
}
