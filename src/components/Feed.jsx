import { useContext, useState } from "react";
import PostsList from "./PostsList";
import { Context } from "../App";

const initInput = {
  contactId: 10, 
  title: "",
  content: "",
}

function Feed() {
    const { posts, setPosts } = useContext(Context)
    const [input, setInput] = useState(initInput)

    function handleSubmit(event) {
      event.preventDefault()

      fetch("https://boolean-api-server.fly.dev/maha897/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input)
      })  
        .then((response) => response.json())
        .then((newPost) => {
          setPosts([...posts, newPost])
          setInput(initInput)
        })
    }

    function handleChange(event) {
      const { name, value } = event.target
      setInput({ ...input, [name]: value })
    }

    return (
      <main className="feed">
        <form className="post-form" onSubmit={handleSubmit}>
          <input 
            name="title" 
            placeholder="Title" 
            onChange={handleChange}
            value={input.title}
          />

          <textarea
            name="content"
            rows="4"
            cols="50"
            placeholder="What's on your mind?"
            onChange={handleChange}
            value={input.content}
          ></textarea>

          <button type="submit" className="post-button">Post</button>
        </form>

        <PostsList posts={posts} />
      </main>
    );
}

export default Feed