import ProfileLogo from "../SharedIcons/ProfileLogo";
import "../CreatePost/CreatePost.css"
import { AppContext } from "../../../App";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateNewPost } from "../../APIs/PostAPI";
export default function CreatePost () {


    const { posts, setPosts, users, loggedInUser } = useContext(AppContext)
    const [newPostContent, setNewPostContent] = useState("")
    


    const handleInputChange = (e) => {
        setNewPostContent(e.target.value)
    }

 

    const handleSubmit = async () => {
        const [title, ...contentArray] = newPostContent.split("\n")
        const content = contentArray.join("\n").trim()
        const newPost = {
            title: title.trim(),
            content: content,
            contactId: loggedInUser.id
        }

        try {
            if (title === "" || title == " "){
                return
            }
            const result = await CreateNewPost("thomaafl", newPost)
            if (result) {
               
                setPosts([...posts, newPost])
               
                
            }
        } catch (error) {
            console.error("Error creating post: ", error);
        }
    }

   

    return(
        <>
            <div className="create-post">
                <div className="profile-logo-create-post">
                <p className="initials2">{loggedInUser.firstName.charAt(0)}{loggedInUser.lastName.charAt(0)}</p>
                </div>
                <textarea 
                    className="post-input" 
                    placeholder="What's on your mind?" 
                    value={newPostContent} 
                    onChange={handleInputChange}>
                </textarea>
                <button className="create-post-button" onClick={handleSubmit}>Post</button>

            </div>
        
        </>



    )
}