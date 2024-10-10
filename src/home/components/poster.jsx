import { useState } from "react"
import { useContext } from "react" 
import { userContext } from "../../App"
import Post from "./post"
import Post_Input from "./post_input"
import Post_Title from "./post_title"
import Profile_Icon from "../../header/components/profile_icon"
export default function Poster({posts, setPosts}){



    const user=useContext(userContext).user
    const [newPost, setNewPost]=useState({
        user: user,
        title: '',
        message: ''
    })


    const updatePosts = (event, newPost) => {
        event.preventDefault()
        console.log(newPost)
        setPosts([newPost,...posts ])

    }
    

    return (
        <div className="poster">
            <div>
                <Profile_Icon user={user}/>
            </div>

            <form className="post_text">
                
                <Post_Title newPost={newPost} setNewPost={setNewPost}/>
                <br/>
          
                <Post_Input newPost={newPost} setNewPost={setNewPost}/>

                <br/>
                
                
            </form>

            <div className="post_submitter">
                <input className="post_submit" type="submit" value="Post" onClick={(event) => updatePosts(event, newPost)}/>
            </div>

        </div>
        
        
    )
}