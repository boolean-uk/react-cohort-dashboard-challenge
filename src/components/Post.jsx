/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NewComment from "./NewComment";
import Comment from "./Comment";
import "../stylesheets/postfeed.css";
import InitialCircle from './InitialCircle';

function Post({ post }) {
	const [author, setAuthor] = useState(null);
	const [comments, setComments] = useState([]);
	useEffect(() => {
		fetch(
			`https://boolean-uk-api-server.fly.dev/KajaPlaszko/post/${post.id}/comment`
		)
			.then((response) => response.json())
			.then((data) => setComments(data))
			.catch((error) => console.error("Error fetching comments:", error));
	}, [post.id]);

	const addComment = (newComment) => {
		setComments((prevComments) => [...prevComments, newComment]);
	};
	useEffect(() => {
		const fetchContact = async () => {
			const response = await fetch(
				`https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact/${post.contactId}`
			);
			const jsonData = await response.json();

			setAuthor(jsonData);
		};

		fetchContact();
	}, [post.contactId]);



	if (!post) {
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
					<h3>
						{author?.firstName} {author?.lastName}
					</h3>
					<Link to={`/posts/${post.id}`}>
						<p>{post.title}</p>
					</Link>
				</div>
			</div>
			<p>{post.content}</p>
			<hr />
			<div className="comments-section">
				<h4>See previous comments</h4>
				{comments.map((comment) => (
					<Comment
						key={comment.id}
						comment={comment}
					/>
				))}
				<NewComment
					postId={post.id}
					addComment={addComment}
				/>
			</div>
		</div>
	);
}

export default Post;
