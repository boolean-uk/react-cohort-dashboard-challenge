import UserIcon from "../../components/icons/UserIcon";
import { useContext, useState } from "react";
import { BaseURL, postContext } from "../../App";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {

    const { user, posts, setPosts } = useContext(postContext);
    const [postData, setPostData] = useState({ title: "", content: "" });
    
    // Submit the form data to create a new post.
    const handleSubmit = async (event) => {
        event.preventDefault();
         // If postData is empty, do not submit
        if (postData.content.trim() === "" || postData.title.trim() === "")
            return;
        const newPost = {
            contactId: user.id,
            content: postData.content.trim(),
            title: postData.title.trim(),
        };

        const postApiRequest = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        };

        const response = await fetch(
            BaseURL + "/post",
            postApiRequest
        );
        const data = await response.json();
        setPosts([...posts, data]);
        setPostData({ title: "", content: "" });
    };
    
    const nav = useNavigate();

    const visitProfile = () => {
        nav("/profile/" + user.id);
    };


    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <div className="post-create">
                <UserIcon
                    color={user.favouriteColour}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    onClick={visitProfile}
                />
                <input
                    type="text"
                    name="title"
                    className="post-bar"
                    placeholder="What's on your mind?"
                    value={postData.title}
                    onChange={(e) => {
                        setPostData({ ...postData, title: e.target.value });
                    }}
                />
                <input
                    type="text"
                    name="content"
                    className="post-bar"
                    placeholder="Write your Post here..."
                    value={postData.content}
                    onChange={(e) => {
                        setPostData({ ...postData, content: e.target.value });
                    }}
                />
                <button type="submit" className="post-btn"> Post</button>
            </div>
        </form>
    );
};

export default PostCreate;