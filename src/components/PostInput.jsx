import { useContext, useState } from "react"
import '../styling/postInput.css'
import ColouredCircle from "./ColouredCircle"
import { UserPostsContext } from "./PostFeed"
import { UserContext } from "../App"
import { Link } from "react-router-dom"
/* eslint react/prop-types: 0 */

function PostInput(){
    const { updateUserPosts } = useContext(UserPostsContext)
    const { userLoggedIn } = useContext(UserContext)

    //If this one does not work, a contact id with the id 16 has to be made in the swagger (or use any other contact)
    const initialPost = {
        title: "",
        content: "",
        contactId: userLoggedIn.id //Don't have login function so I use one I put in of myself
    }

    const [postInput, setInput] = useState(initialPost)

    const onChange = (event) => {
        setInput({...postInput, content: event.target.value})
    }

    const handlePost = () => {
        try{
            console.log(postInput)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postInput)
            };
            fetch("https://boolean-uk-api-server.fly.dev/PandersPanda/post", requestOptions)
                .then(response => console.log(response.json()))
                .then(updateUserPosts())
        }
        catch(e){
            console.error(e)    
        }

        document.getElementById('post_input').value = ''
     }

    return(
        <div className="postInput">
            <div className="postInput__container">
            <Link to="/profile"><ColouredCircle firstName={userLoggedIn.firstName} lastName={userLoggedIn.lastName} color={userLoggedIn.favouriteColour}/></Link>
                <input
                    id = "post_input"
                    placeholder="What's on your mind?"
                    rows="3"
                    onChange={onChange}
                />
                <button className="postInput__button" onClick={handlePost}>
                    Post
                </button>
            </div>
        </div>
    )
}

export default PostInput