import { useState, useContext } from "react";
import { StyleContext } from "../../../App";
import { DataContext } from "../../../App";

function CreatePost() {
    const { getColorFromInitials, getInitials } = useContext(StyleContext);
    const { postPost, user } = useContext(DataContext);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const handleClick = () => {
        const post = {
            title: title,
            content: content,
            contactId: user.id
        }
        postPost(post);
        setContent('');
        setTitle('');
    }

    if (user) return (
        <div className="create-post-container">
            <div className="create-post">
                <div className="profile-pic" style={{ backgroundColor: getColorFromInitials(getInitials(user.firstName, user.lastName)) }}>
                    {getInitials(user.firstName, user.lastName)}
                </div>
                <div className='title-input'>
                    <input type="text" placeholder="Add a title..." value={title} onChange={handleChangeTitle} />
                </div>
                <div className='post-input'>
                    <input type="text" placeholder="Add a post..." value={content} onChange={handleChangeContent} />
                </div>
                <button onClick={handleClick}>
                    Post
                </button>
            </div>
        </div>
    );
}

export default CreatePost;
