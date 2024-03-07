import "../../styles/comments/CommentContent.css";

import InputBox from '../InputBox';
import { useState } from "react";
export default function CommentContent({ comment, isEditing = false, commentUser, setIsEditing, comments, setComments }) {
    const [text, setText] = useState(comment.content);
    const handleSaveEdit = (e) => {
        e.preventDefault();
        if (text.length === 0) return alert('Comment cannot be empty');
        if (text === comment.content) return setIsEditing(false);
        const updatedComment = { ...comment, content: text }
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/post/${comment.postId}/comment/${comment.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedComment)
        })
        setIsEditing(false);
        const updatedComments = comments[comment.postId].map(c => c.id === comment.id ? updatedComment : c)
        setComments({
            ...comments,
            [comment.postId]: updatedComments
        })
    }
    return (
        <div className="commentContent">
            <p className="commentUserName">{commentUser.firstName} {commentUser.lastName}</p>
            {
                isEditing ?
                    <form className="editContainer" onSubmit={(e) => handleSaveEdit(e)} onReset={() => { setText(comment.content); setIsEditing(false) }}>
                        <InputBox placeholder="Comment content" value={text} setContent={setText} />
                        <button className='submitEdit' type='submit'>Save</button>
                        <button className='cancelEdit' type='reset'>Cancel</button>
                    </form>
                    :
                    <p>{comment.content}</p>
            }
        </div>
    )
}