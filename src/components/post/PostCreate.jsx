import "../../style/post/PostCreate.css";
import UserIcon from "../../components/icons/UserIcon";
import { useContext, useState } from "react";
import { postContext } from "../../App";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
    const { user, posts, setPosts } = useContext(postContext);
    const [postData, setPostData] = useState({ title: "", content: "" });

    const submitPost = async (event) => {
        event.preventDefault();
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
            "https://boolean-api-server.fly.dev/BloodyFM/post",
            postApiRequest
        );
        const data = await response.json();
        setPosts([...posts, data]);
        setPostData({ title: "", content: "" });
    };

    const nav = useNavigate();

    const goToProfile = () => {
        nav("/profile/" + user.id);
    };

    return (
        <form className="post-form" onSubmit={submitPost}>
            <div className="post-create">
                <UserIcon
                    onClick={goToProfile}
                    color={user.favouriteColour}
                    firstName={user.firstName}
                    lastName={user.lastName}
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
                <button type="submit" className="post-btn">
                    Post
                </button>
            </div>
            <div className="post-create">
                <input
                    type="text"
                    name="content"
                    className="post-bar"
                    placeholder="Please elaborate..."
                    value={postData.content}
                    onChange={(e) => {
                        setPostData({ ...postData, content: e.target.value });
                    }}
                />
            </div>
        </form>
    );
};

export default PostCreate;
