/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/Form.css';

export default function PostCommentForm({ post, setPostComments }) {
	const [commentFormData, setCommentFormData] = useState({
		postId: post.id,
		contactId: 1,
		content: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setCommentFormData({ ...commentFormData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newComment = { ...commentFormData };

		fetch(
			`https://boolean-uk-api-server.fly.dev/johnfa1508/post/${post.id}/comment`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newComment),
			}
		)
			.then((response) => response.json())
			.then(() => {
				setPostComments((prevComments) => [...prevComments, newComment]);
			})
			.catch((error) => {
				console.error('Error creating new comment:', error);
			});

		setCommentFormData({ postId: post.id, contactId: 1, content: '' });
	};

	return (
		<>
			<section>
				<div className="post-card form-input">
					<form className="form" onSubmit={handleSubmit}>
						<label>
							<input
								type="text"
								name="content"
								onChange={handleChange}
								value={commentFormData.content}
								placeholder="Add a comment..."
								required
							/>
						</label>

						<input className="form__submit" type="submit" value="Post" />
					</form>
				</div>
			</section>
		</>
	);
}
