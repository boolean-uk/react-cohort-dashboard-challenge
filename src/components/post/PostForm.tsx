import React, { useState } from "react";
import "../../styling/postForm.css";
import Avatar from "../user/Avatar";
import { useUser } from "../../contexts/UserContext";
import { usePosts } from "../../contexts/PostContext";

const PostForm = () => {
    const { user } = useUser();
    const { createPost } = usePosts();
    const [content, setContent] = useState("");

    if (!user) return <div>Loading user...</div>;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPost = createPost("Voveo absorbeo appono theologus suspendo alioqui.", content, user?.id);
        console.log(newPost);
        setContent("");
        
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <Avatar />
            <textarea
                className="post-input"
                value={content}
                onChange={handleChange}
                placeholder="What's on your mind?"
                rows={3}
                required
            />
            <button type="submit" className="post-button">
                Post
            </button>
        </form>
    );
};

export default PostForm;