import { useContext, useState } from "react"
import "./styles.css"
import UserIcon from "@/components/UserIcon"
import { LoggedInUserContext } from "@/App"

const inititalUserState = {content: ""}

export default function PostAddCommentForm({postId, setComments, comments}) {
    const [ userData, setUserData] = useState(inititalUserState)

    const { loggedInUser } = useContext(LoggedInUserContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const createdComment = {...userData, contactId: loggedInUser.id, postId: postId}
        fetch(`https://boolean-api-server.fly.dev/Agatland/post/${postId}/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(createdComment),
            }).then(res => {
            if (res.ok) {
                setComments([...comments, createdComment])
            }
            }).catch(error => console.error("Problem with creating post: ", error))

        setUserData(inititalUserState)
    };

    return (
        <form className="add-comment-form" onSubmit={handleSubmit}>
            <UserIcon userToIcon={loggedInUser}/>
            <input 
                name="content" 
                type="text"
                placeholder="Add a comment..."
                value={userData.content}
                onChange={handleChange}
            />
            <input type="submit" />
        </form>
    )
}