import { useContext, useState } from "react";
import { MyContext } from "../../../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { addContentToDb } from "../../../Api";


function getInitialPost() {
    const title = localStorage.getItem("title")
    const content = localStorage.getItem("content")
    const contactId = 1

    return {
      title: title || '',
      content: content || '',
      contactId: contactId
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const body = {
          contactId: post.contactId,
          title: post.title,
          content: post.content
        }
        const newPost = await addContentToDb(body)
        context.setPosts([newPost, ...context.posts]);
        setPost(getInitialPost)
        localStorage.clear()

    }

    return (
      <div className="container custom-container"> {/* Added custom class, now we can style bootstrap*/}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" className="form-control" id="title" name="title" value={post.title} onChange={handleChange} placeholder="What's the topic for today?" />
              </div>
              <div className="mb-3">
                <label htmlFor="content" className="form-label">Content:</label>
                <textarea className="form-control" id="content" name="content" value={post.content} onChange={handleChange} placeholder="What's on your mind?" rows="5" ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Post!</button>
            </form>
          </div>
        </div>
      </div>
    )
}
