import { useContext, useState } from "react"
import ProfilePicture from "../../ProfilePicture/ProfilePicture"
import { UserContext } from "../../../App"
import { LoadingContext, PostContext } from "../Dashboard"
import "./NewPostForm.css"

function NewPostForm() {
  const { user } = useContext(UserContext)
  const { posts, setPosts } = useContext(PostContext)
  const { setLoading } = useContext(LoadingContext)
  const [post, setPost] = useState({ title: "", content: ""})

  function handleChange(event) {
    const { name, value } = event.target
    setPost({ ...post, [name]:value })
  }

  async function postPost(event) {
    event.preventDefault()
    event.target.reset()

    const postRequest = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({...post, contactId: user.id})
    }
    setLoading(true)
    await fetch("https://boolean-api-server.fly.dev/kristianverduin/post", postRequest).then(res => res.json()).then(res => setPosts([res, ...posts]))
    setLoading(false)
  }

  return (
    <form onSubmit={postPost} className="new-post">
        <ProfilePicture user={user}/>
        <input placeholder=" Title ..." type="text" name="title" value={post.title} onChange={handleChange} />
        <input placeholder=" What's on your mind?" type="text" name="content" value={post.content} onChange={handleChange} />
        <button type="submit">Post</button>
    </form>
  )
}

export default NewPostForm
