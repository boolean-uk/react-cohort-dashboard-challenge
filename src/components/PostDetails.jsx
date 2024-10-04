import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import "../stylesheets/postfeed.css";
import InitialCircle from './InitialCircle';

function PostDetails() {
	const { id } = useParams();
	const [post, setPost] = useState(null);
	const [comments, setComments] = useState([]);
	const [author, setAuthor] = useState(null);
	const [loading, setLoading] = useState(true); 

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(
					`https://boolean-uk-api-server.fly.dev/KajaPlaszko/post/${id}`
				);
				if (!response.ok) throw new Error("Failed to fetch post");
				const postData = await response.json();
				setPost(postData);
				setAuthor(await fetchAuthor(postData.contactId)); 
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false); 
			}
		};

		const fetchComments = async () => {
			try {
				const response = await fetch(
					`https://boolean-uk-api-server.fly.dev/KajaPlaszko/post/${id}/comment`
				);
				if (!response.ok) throw new Error("Failed to fetch comments");
				const commentsData = await response.json();
				setComments(commentsData);
			} catch (error) {
				console.error(error);
			}
		};

		const fetchAuthor = async (contactId) => {
			try {
				const response = await fetch(
					`https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact/${contactId}`
				);
				if (!response.ok) throw new Error("Failed to fetch author");
				return await response.json();
			} catch (error) {
				console.error(error);
			}
		};

		fetchPost();
		fetchComments();
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}


	return (
		<div className="post">
			<div className="post-header">
            <InitialCircle 
                firstName={author?.firstName} 
                lastName={author?.lastName} 
                color={author?.favouriteColour}
            />
				<div className="post-author">
					<h3>{post.title}</h3> 
				</div>
			</div>
				<p>{post.content}</p>
			<hr />
			<div className="comments-section">
				<h4>See previous comments</h4>
				{comments.length > 0 ? (
					comments.map((comment) => (
						<Comment key={comment.id} comment={comment} />
					))
				) : (
					<p>No comments yet.</p>
				)}
			</div>
		</div>
	);
}

export default PostDetails;
