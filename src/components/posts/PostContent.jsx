import { useState } from 'react';
import InputBox from '../InputBox';
import "../../styles/Buttons.css";
export default function PostContent({ post, isEditing = false, setIsEditing, setPosts }) {
    const [text, setText] = useState(post.content);
    const handleSaveEdit = (e) => {
        e.preventDefault();
        if (text.length === 0) return alert('Post cannot be empty');
        if (text === post.content) return setIsEditing(false);
        const updatedPost = { ...post, content: text }
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/post/${post.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPost)
        })
        setIsEditing(false);
        setPosts(prev => prev.map(p => p.id === post.id ? updatedPost : p))
    }
    return (
        <div>
            {
                isEditing ?
                    <form className="editContainer" onSubmit={(e) => handleSaveEdit(e)} onReset={() => { setText(post.content); setIsEditing(false) }}>
                        <InputBox placeholder="Post content" value={text} setContent={setText} />
                        <button className='submitEdit' type='submit'>Save</button>
                        <button className='cancelEdit' type='reset'>Cancel</button>
                    </form>
                    :
                    <p>{post.content}</p>
            }
        </div>
    )
}