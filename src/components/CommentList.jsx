import PostListItem from './PostListItem.jsx'
import { useContext, useState, useEffect } from 'react'
import { PostContext, UserContext } from '../App'
import CommentListItem from './CommentListItem.jsx';
import "../styles/CommentList.css";

function CommentList({ postId }) {
    const { posts } = useContext(PostContext);
    const [comments, setComments] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const commentsUrl = `https://boolean-uk-api-server.fly.dev/Julia-Lindgren/post/${postId}/comment`;

    const fetchComments = async () => {
        fetch(commentsUrl)
            .then((response) => response.json())
            .then((comments) => {
                setComments(comments);
            })
            .catch((error) => {
                console.error('Error fetching comments:', error);
            });
    }

    useEffect(() => {
        fetchComments();
    }, [postId, posts]);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className='commentList'>
            {comments.length > 3 && (
                <span className="toggle-comments" onClick={toggleExpand}>
                    {isExpanded ? 'See less comments' : 'See previous comments'}
                </span>
            )}
            <ul className="comments">
                {comments.slice(0, isExpanded ? comments.length : 3).map((comment) => (
                    <CommentListItem key={comment.id} comment={comment} setComments={setComments} />
                ))}
            </ul>
            
        </div>
    )
}

export default CommentList