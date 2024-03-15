import Avatar from "../common/Avatar";
import { useContext, useState } from "react";
import { MetaContext } from "../../App";

function PostPost() {
    const { loggedIn } = useContext(MetaContext);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        contactId: loggedIn ? loggedIn.id : null // Handle case where loggedIn is undefined
    });

    const blankForm = {
        title: "",
        content: "",
        contactId: loggedIn ? loggedIn.id : null
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const newPost = async (newPostData) => {
        try {
            const response = await fetch("https://boolean-api-server.fly.dev/Hjaldrgud/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPostData)
            });

            if (response.ok) {
                return true;
            } else {
                console.error("Failed to post");
                return false;
            }
        } catch (error) {
            console.error("Error:", error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await newPost(formData);
        if (success) {
            setFormData(blankForm); // Reset form data to blankForm after successful post
        } else {
            console.error("Failed to post");
        }
    };

    return (
        <div style={{ margin: "20px", padding: "15px", backgroundColor: "#ffffff", borderRadius: "5px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "10px" }}>
                    <Avatar />
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="title" id="title" placeholder="Title" required onChange={handleChange} value={formData.title} />
                        <input type="text" name="content" id="content" placeholder="What's on your mind?" required onChange={handleChange} value={formData.content} />
                        <button type="submit">Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PostPost;
