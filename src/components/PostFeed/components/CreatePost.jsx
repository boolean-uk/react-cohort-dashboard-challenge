import { useState, useContext } from "react"
import "./../styles.css"



function CreatePost({setPosts, posts}) {

    const [post, setPost] = useState({
        title: "",
        content: "",
        contactId: 1
    })
    const handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target; 
        setPost({...post, [name]: value})
    }

    const addPost = async (event) => {
        event.preventDefault()

        //Add to API
        try {
            const res = await fetch("https://boolean-api-server.fly.dev/AxelHan/post", {
                method: "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(post)
            })
            if(res.ok) {
                console.log("success post added")
                setPosts([...posts, post])
                setPost({...post, title: "", content: ""})
            } else{
                console.error("Failed to add post")
            }
        }
        catch (error){
            console.error('Error:', error)
        }

    }
    
  return (
    <div>
    <form onSubmit={addPost}>
        <div>
            <input
            className="create-post-input" 
            name="title" 
            id="title" 
            placeholder="whats on your mind?"
            value= {post.title}
            onChange={handleChange} 
            required
            ></input>
        </div>
        <div>
            <textarea 
            className="create-post-input" 
            name="content" 
            id="content" 
            placeholder="Elaborate"
            value= {post.content}
            onChange={handleChange}
            cols="10" 
            rows="4"
            required
            >
            </textarea>
        </div>
        <button type="submit">Post</button>
    </form>
    </div>
  )
}

export default CreatePost