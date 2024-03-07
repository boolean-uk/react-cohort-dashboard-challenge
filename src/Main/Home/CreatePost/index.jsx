import { useContext } from "react"
import { UserContext } from "../../../App"
import { PostContext } from "../../Home"

import './style.css'

function CreatePost() {
    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)

    return(
        <div >
            <form className="create-post">
                <img src={userContext.currentUser.profileImage} className="user-image" />
                <input type="text" placeholder="What's on your mind?" />
                <button>Post</button>
            </form>
        </div>
    )
}

export default CreatePost