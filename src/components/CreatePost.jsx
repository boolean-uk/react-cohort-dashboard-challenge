import { useContext, useState } from "react";
import { MyContext } from "../App.jsx";

function getInitialPost() {
    const title = localStorage.getItem("title")
    const content = localStorage.getItem("content")

    return {
      title: title || '',
      content: content || '',
    }
}

export default function CreatePost() {
    const [post, setPost] = useState(getInitialPost())
    const context = useContext(MyContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost({
          ...post,
          [name]: value,
        })
        localStorage.setItem(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        context.setPosts([...context.posts, post])
        localStorage.clear()
        setPost(getInitialPost)

    }

    return (
        <div className="rounded-box yellow">
        <form onSubmit={handleSubmit}>
            <label>
              <input type="text" name="title" onChange={handleChange} value={post.title} className="postInput" placeholder="Title: "></input>
            </label>
            <br/>
            <label>
              <textarea name="content" onChange={handleChange} value={post.content} cols={50} rows={5} placeholder="What are you thinking?"></textarea> 
            </label>
            <br/>
            <input type="submit" value="Post!" className="postButton"></input>
        </form>
        </div>
    )
}
