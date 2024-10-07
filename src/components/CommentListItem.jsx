import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { useEffect, useState, createContext } from 'react';
import Avatar from './Avatar';
import { PostContext, UserContext } from '../App';
import "../styles/CommentListItem.css";


function CommentListItem({ comment, setComments }) {

    const { user } = useContext(UserContext);
    const [commenter, setCommenter] = useState(null);
    const { posts, setPosts } = useContext(PostContext);

    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(comment.content);

    const commentUrl = `https://boolean-uk-api-server.fly.dev/Julia-Lindgren/post/${comment.postId}/comment/${comment.id}`;

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const updateComment = async () => {
        try {
            const commentPut = {
                content: editContent,
                postId: comment.postId,
                contactId: comment.contactId,
            };

            const response = await fetch(commentUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentPut),
            });

            if (!response.ok) {
                throw new Error('Failed to update comment');
            }

            const updatedComment = await response.json();

            setComments((prevComments) =>
                prevComments.map((c) => (c.id === updatedComment.id ? updatedComment : c))
            );

            setIsEditing(false);
        } catch (error) {
            console.error('Error updating comment:', error);
        }
    };

    const deleteComment = async () => {
        try {
            const response = await fetch(commentUrl, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete comment');
            }

            setComments((prevComments) => prevComments.filter((c) => c.id !== comment.id));

        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    useEffect(() => {
        const fetchCommenter = async () => {
            try {
                const response = await fetch(`https://boolean-uk-api-server.fly.dev/Julia-Lindgren/contact/${comment.contactId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch commenter');
                }
                const commenter = await response.json();
                setCommenter(commenter);
            } catch (error) {
                console.error('Error fetching commenter:', error);
            }
        };

        fetchCommenter();
    }, [comment.contactId]);


    return (
        <li className='commentListItem'>
            {commenter && commenter.firstName && commenter.lastName && (
                <Avatar
                    userId={commenter.id}
                    firstName={commenter.firstName}
                    lastName={commenter.lastName}
                    favouriteColour={commenter.favouriteColour}
                />
            )}
            <div className="commentBox">
                {commenter && commenter.firstName && commenter.lastName && (
                    <Link to={`/profile/${commenter.id}`}><div className="name">{commenter.firstName} {commenter.lastName}</div></Link>
                )}
                {isEditing ? (
                    <>
                        <input
                            id="edit-comment-input"
                            type="text"
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            placeholder="Edit your comment..."
                        />
                        <div className="edit-actions">
                            <button onClick={updateComment} className="save-button">Save</button>
                            <button onClick={toggleEdit} className="cancel-button">Cancel</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="content">{comment.content}</div>
                        {user && user.id === comment.contactId && (
                            <div className="comment-actions">
                                <button onClick={toggleEdit} className="edit-button">Edit</button>
                                <button onClick={deleteComment} className="delete-button">Delete</button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </li>
    );

}

export default CommentListItem