import { useContext } from "react";
import "../../styles/posts/CreatePost.css";
import { UserContext } from "../../App";
import ProfileImage from "../ProfileImage";
import InputBox from "../InputBox";
export default function CreatePost() {
    const user = useContext(UserContext)
    return (
        <div className="createPostContainer">
            {user &&
                <ProfileImage user={user} w={40} h={40} marginR={20} />
            }
            <InputBox placeholder="What's on your mind?" />
            <button type="button" className="createPostButton">Post</button>
        </div>
    )
}