import UserIcon from "@/components/UserIcon"
import { useContext, useState } from "react"
import { LoggedInUserContext } from "@/App"

import "./styles.css"
import { CohortContext } from "@/App"

const initialPostState = {
    title: "",
    content: ""
}

export default function AddPostForm() {
    const { loggedInUser } = useContext(LoggedInUserContext)
    const { setPosts, posts } = useContext(CohortContext)

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
        fetch(`https://boolean-api-server.fly.dev/Agatland/post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(createdPost),
            }).then(res => res.json())
            .then(data => {
            if (data) {
                setPosts([...posts, data])
            }
            }).catch(error => console.error("Problem with creating post: ", error))
        setUserData(initialPostState)
    }

    return (
        <form className="post-feed-add" onSubmit={handleSubmit}>
            <div className="post-feed-add-header">
                <UserIcon userToIcon={loggedInUser}/>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="What's on your mind?" 
                    value={userData.title}
                    onChange={handleChange}
                />
                <input type="submit" value="Post" />
            </div>
            <textarea 
                name = "content"
                placeholder="Expand on that" 
                value={userData.content} 
                onChange={handleChange}
            />
        </form>
    )
}