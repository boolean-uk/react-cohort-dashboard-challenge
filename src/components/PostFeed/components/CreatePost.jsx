import { useState, useContext } from "react"



function CreatePost({setPosts, posts}) {
    console.log(posts)
    const [post, setPost] = useState({
        title: "",
        content: "",
        contactId: 2
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
            console.log(res.json)
            console.log(res)
            if(res.ok) {
                console.log("success post added")
                setPosts([...posts, post])

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
            name="title" 
            id="title" 
            placeholder="whats on your mind?"
            value= {post.title}
            onChange={handleChange} 
            ></input>
        </div>
        <div>
            <textarea 
            name="content" 
            id="content" 
            placeholder="whats on your mind?"
            value= {post.content}
            onChange={handleChange}
            cols="30" 
            rows="10"></textarea>
        </div>
        <button type="submit">Post</button>
    </form>
    </div>
  )
}

export default CreatePost