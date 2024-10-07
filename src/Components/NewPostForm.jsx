import { useState, useContext } from "react";
import { AppContext } from "../App";
import "./Styling/NewPostForm.css";

function NewPostForm() {
  const { user, setPosts } = useContext(AppContext)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !content) return

    const newPost = {
      title,
      content,
      contactId: user.id,
      createdAt: new Date().toISOString(),
      comments: [],
    };

    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/josteinruen/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      })

      if (response.ok) {
        const createdPost = await response.json()
        setPosts((prevPosts) => [createdPost, ...prevPosts])
        setTitle("")
        setContent("")
      } else {
        console.error('Error creating post:', response.statusText)
      }
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  return (
    <form className="new-post-form" onSubmit={handleSubmit}>
      <h2>Create New Post</h2>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  )
}

export default NewPostForm;