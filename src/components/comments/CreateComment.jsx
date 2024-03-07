import { useContext, useState } from "react"
import { CommentContext, UserContext } from "../../App"
import ProfileImage from "../ProfileImage"
import "../../styles/comments/CreateComment.css"
import InputBox from "../InputBox";
export default function CreateComment( {postId} ) {
    const {user} = useContext(UserContext);
    const [content, setContent] = useState("");
    const {comments, setComments} = useContext(CommentContext)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (content === "") {
            return
        }
        const comment = {
            postId: postId,
            content: content,
            contactId: user.id,
        }
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/post/${postId}/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comment),
        }).then((response) => response.json())
            .then((data) => {
                comments[postId] ? 
                setComments({
                    ...comments,
                    [postId]: [data, ...comments[postId]]
                })
                :
                setComments({
                    ...comments,
                    [postId]: [data]
                })
                setContent("");
            })
    }
    return (
        <div className="createCommentContainer">
            <ProfileImage className="addCommentPP" user={user} w={45} h={45} />
            <form className="inputForm" onSubmit={(e) => handleFormSubmit(e)}>
                <InputBox placeholder="Add a comment..." marginL={22} value={content} setContent={setContent} />
                <button type="submit" className="sendCommentButton">{">"}</button>
            </form>
        </div>
    )
}