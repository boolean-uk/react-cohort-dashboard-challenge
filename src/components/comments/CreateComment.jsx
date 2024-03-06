import { useContext } from "react"
import { UserContext } from "../../App"
import ProfileImage from "../ProfileImage"
import "../../styles/comments/CreateComment.css"
import InputBox from "../InputBox";
export default function CreateComment() {
    const user = useContext(UserContext);
    return (
        <div className="createCommentContainer">
            <ProfileImage className="addCommentPP" user={user} w={45} h={45} />
            <InputBox placeholder="Add a comment..." marginL={22} />
            <button type="button" className="sendCommentButton">{">"}</button>
        </div>
    )
}