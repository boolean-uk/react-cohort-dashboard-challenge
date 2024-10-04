/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from 'react';
import PostComment from './PostComment';
import PostCommentForm from './PostCommentForm';
import '../styles/Post.css';
import { Link, useNavigate } from 'react-router-dom';
import { PostContext } from '../context';
import UserAvatar from './UserAvatar';

export default function Post({ post }) {
	const [postContact, setPostContact] = useState(null);
	const [postComments, setPostComments] = useState([]);
	const [showAllComments, setShowAllComments] = useState(false);
	const commentsToDisplay = showAllComments
		? postComments
		: postComments.slice(0, 3);
	const { setPostData, fetchData } = useContext(PostContext);
	const navigate = useNavigate();

	const handleDelete = () => {
		fetch(`https://boolean-uk-api-server.fly.dev/johnfa1508/post/${post.id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(() => {
				fetchData();
				setPostData((prevPost) =>
					prevPost.filter((currentPost) => currentPost.id !== post.id)
				);
				navigate('/');
			})
			.catch((error) => {
				console.error('Error deleting post:', error);
			});
	};

	useEffect(() => {
		const fetchContact = async () => {
			const response = await fetch(
				`https://boolean-uk-api-server.fly.dev/johnfa1508/contact/${post.contactId}`
			);
			const jsonData = await response.json();

			setPostContact(jsonData);
		};

		fetchContact();
	}, [post]);

	useEffect(() => {
		const fetchComments = async () => {
			const response = await fetch(
				`https://boolean-uk-api-server.fly.dev/johnfa1508/post/${post.id}/comment`
			);
			const jsonData = await response.json();

			setPostComments(jsonData);
		};

		fetchComments();
	}, [post, setPostComments]);

	if (!postContact)
		return (
			<>
				<div>
					<p className="loading" style={{ color: 'black' }}>
						Loading...
					</p>
				</div>
			</>
		);

	return (
		<>
			<article className="post-card">
				<div className="author-info">
					<UserAvatar user={postContact} isLink={true} isComment={false} />

					<h2>
						<Link to={`/view/profile/${postContact.id}`} className="link">
							{postContact.firstName} {postContact.lastName}
						</Link>
					</h2>
				</div>

				<div className="post-content">
					<Link to={`/view/post/${post.id}`} className="link">
						<p className="post-title link">{post.title}</p>
					</Link>
					<p>{post.content}</p>
				</div>

				<div className="comment-section">
					{postComments.length > 3 && (
						<p
							className="link"
							onClick={() => setShowAllComments((prev) => !prev)}
							style={{ cursor: 'pointer' }}
						>
							{showAllComments
								? `Hide comments`
								: `See all comments (${postComments.length})`}
						</p>
					)}

					{commentsToDisplay.map((comment) => (
						<PostComment comment={comment} key={comment.id} />
					))}
				</div>

				<PostCommentForm post={post} setPostComments={setPostComments} />

				<button onClick={handleDelete}>Delete</button>
			</article>
		</>
	);
}
