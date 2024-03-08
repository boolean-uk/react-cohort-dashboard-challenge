import UserIcon from "@/components/UserIcon"
import { useContext, useState } from "react"
import { LoggedInUserContext } from "@/App"

import "./styles.css"

const initialPostState = {
    title: "",
    content: ""
}

export default function AddPostForm() {
    const { loggedInUser, setPosts, posts } = useContext(LoggedInUserContext)

    const [userData, setUserData] = useState(initialPostState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const createdPost = {...userData, contactId: loggedInUser.id}
        fetch(`https://boolean-api-server.fly.dev/AGatland/post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(createdPost),
            }).then(res => {
            if (res.ok) {
                setPosts([...posts, createdPost])
            }
            }).catch(error => console.error("Problem with creating post: ", error))
    };

    return (
        <form className="post-feed-add" onSubmit={handleSubmit}>
            <div className="post-feed-add-header">
                <UserIcon userToIcon={loggedInUser}  onChange={handleChange}/>
                <input type="text" placeholder="What's on your mind?" value={userData.title}/>
                <input type="submit" value="Post" />
            </div>
            <textarea placeholder="Expand on that" value={userData.content}  onChange={handleChange}/>
        </form>
    )
}