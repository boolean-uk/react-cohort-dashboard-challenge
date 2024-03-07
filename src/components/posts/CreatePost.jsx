import { useContext, useState } from "react";
import "../../styles/posts/CreatePost.css";
import { UserContext } from "../../App";
import { PostContext } from "../../pages/Home";
import ProfileImage from "../ProfileImage";
import InputBox from "../InputBox";
import { useNavigate } from "react-router-dom";
export default function CreatePost() {
    const user = useContext(UserContext)
    const { posts, setPosts } = useContext(PostContext);
    const [postContent, setPostContent] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (postContent === "") {
            return
        }

        const post = {
            title: postContent.split(" ")[0],
            content: postContent,
            contactId: user.id,
        }
        fetch("https://boolean-api-server.fly.dev/spectraldesign/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        }).then((response) => response.json())
            .then((data) => {
                setPosts([data, ...posts]);
                setPostContent("");
            })
    }
    return (
        <div className="createPostContainer">
            {user &&
                <ProfileImage user={user} w={40} h={40} marginR={20} />
            }
            <form className="createPostForm" onSubmit={(e) => handleFormSubmit(e)}>
                <InputBox placeholder="What's on your mind?" setContent={setPostContent} value={postContent} />
                <button type="submit" className="createPostButton">Post</button>
            </form>
        </div>
    )
}