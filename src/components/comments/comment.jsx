import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import '../../dashboard.css';

function Comment({ comment, baseURL, user}) {

    const [commentContact, setCommentContact] = useState([])
    const navigate = useNavigate();
    const [editComment, setEditComment] = useState({
        postId: comment.postId,
        contactId: comment.contactId,
        content: comment.content
    })


    // fetch contact from comment contact id
    useEffect(() => {
        fetch(`${baseURL}/contact/${comment.contactId}`)
        .then((response) => response.json())
        .then((data) => setCommentContact(data));
        }, [baseURL, comment.contactId]);

    useEffect(() => {
        if (comment.contactId) {
            setEditComment({
                postId: comment.postId,
                contactId: comment.contactId,
                content: comment.content,
            })
        }
    }, [comment])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditComment(prevEditComment => ({
            ...prevEditComment,
            [name]: value
        }));
    };
    const handleEdit = () => {
        console.log("Edit comment");
        fetch(`${baseURL}/post/${comment.postId}/comment/${comment.id}`,
            {method: 'PUT',
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify(editComment),
            })
        .then(response => response.json())
        .then(data => {
            console.log('Edited:', data);
            navigate(`/`)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    const handleDelete = () => {
        fetch(`${baseURL}/post/${comment.postId}/comment/${comment.id}`,
        {method: 'DELETE'})
        .then(response => response.json())
        .then(data => {
        console.log('Deleted data:', data);
        navigate(`/`)
        })
    }

    return(
        <div className="comment">
        <article>
            <h4>{commentContact.firstName} {commentContact.lastName}</h4>
            <div className="comment-header">
                {/* Make this link to profile page */}
            <img src={commentContact.profileImage} alt={`${commentContact.firstName}'s profile`} className="comment-avatar"/>
            </div>
            <div>
                <p>{comment.content}</p>
            </div>
            {user.id === comment.contactId && (
                <>
                <textarea
                    className="comment-edit-textarea"
                    name="content"
                    value={editComment.content}
                    onChange={handleChange}
                    placeholder="Comment Content"
                />
                <div className="comment-actions">
                    <button onClick={handleEdit} className="submit-comment">Edit Comment</button>
                    <button onClick={handleDelete} className="submit-comment">Delete Comment</button>
                </div>
            </>
            )}
        </article>
        </div>
    )
}
export default Comment