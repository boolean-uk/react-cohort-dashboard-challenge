import { useState, useContext } from "react"
import "./../styles.css"
import PropTypes from "prop-types"
import { UserContext, PostContext } from "../../../App"
import ProfileCircle from "../../Profile/components/ProfileCircle"


function CreatePost() {
    const {loggedInUser} = useContext(UserContext)
    const { posts, setPosts } = useContext(PostContext);
    
    const [post, setPost] = useState({
        id: "",
        title: "",
        content: "",
        contactId: loggedInUser.id
        
    })
    
    const handleChange = (event) => {
        event.preventDefault()
        const {value} = event.target; 
        setPost({...post, title: value.substring(0,5), content: value, id: posts[posts.length-1].id+1 })
        console.log(post)
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
    <div className="create-post-container">
        <ProfileCircle user={loggedInUser}></ProfileCircle>
        <form onSubmit={addPost} className="create-post-form">
            <input
            name="content" 
            id="content" 
            placeholder="whats on your mind?"
            value= {post.content}
            onChange={handleChange} 
            required
            minLength="5"
            ></input>
            <button type="submit" className="submitbtn">Post</button>
        </form>

    </div>
  )
}

CreatePost.propTypes = {

    setPosts: PropTypes.func,
    posts: PropTypes.array

}

export default CreatePost