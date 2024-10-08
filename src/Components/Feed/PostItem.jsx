/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import CommentItem from '../Comments/CommentItem'
import CreateCommentForm from '../Comments/CreateCommentForm'

export default function PostItem({post}) {
    const [postAuthor, setPostAuthor] = useState(null);
    const [comments, setComments] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://boolean-uk-api-server.fly.dev/siljegja/contact/${post.contactId}`
			);
			const jsonData = await response.json();
			setPostAuthor(jsonData);
		};

		fetchData();
	}, [post]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/siljegja/post/${post.id}/comment`);
            const jsonData = await response.json();
            setComments(jsonData)
        };
        fetchData();
    }, [post, post.id, setComments])

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    }

    if (!postAuthor)
		return (
            <div>
                <p className="loading" style={{ color: 'black' }}>
                    Loading...
                </p>
            </div>
		);

    return (
       <article className="post-card">
            <div className="author-info">
                <div className="author-avatar" style={{backgroundColor:postAuthor.favouriteColour}}>
                    <div className="avatar-initials">
                        <span>
                            {postAuthor.firstName[0]}
                            {postAuthor.lastName[0]}
                        </span>
                    </div>
                </div>
                <Link to='/profile'>
                    <h2>{postAuthor.firstName} {postAuthor.lastName}</h2>
                </Link>
            </div>

            <div className="post-content">
                <Link to={`/post/${post.id}`}>
                    <p>{post.title}</p>
                </Link>
                <p>{post.content}</p>
            </div>

            <div className="comment-section">
                {comments.length > 3 && (
                    <p className="toggle-comments" onClick={toggleExpand}>
                        {isExpanded ? 'See less comments' : 'See previous comments'}
                    </p>
                )}

                {comments.slice(0, isExpanded ? comments.length : 3).map((comment) => (
                   	<CommentItem comment={comment} key={comment.id} />
                    
                ))}

                <CreateCommentForm postId={post.id} post={post} postAuthor={postAuthor} comments={comments} setComments={setComments} />
            </div>
       </article>
    );
}   
