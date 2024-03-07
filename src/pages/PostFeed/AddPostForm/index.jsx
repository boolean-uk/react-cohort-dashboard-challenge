import UserIcon from "@/components/UserIcon"
import { useContext, useState } from "react"
import { LoggedInUserContext } from "@/App"

import "./styles.css"

const initialPostState = {
    title: "",
    content: "",
    contactId: -1
}

export default function AddPostForm() {
    const { loggedInUser } = useContext(LoggedInUserContext)

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
        
        updateUserInfo(userData)
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