import { useParams } from "react-router-dom";
import { getRequest, putRequest } from "../../utilites/apiRequests";
import { useEffect, useState } from "react";

export const EditPostPage = () => {
	const [post, setPost] = useState(null);
	const [formData, setFormData] = useState(null);
	const [successfullSubmit, setSuccesfullSubmit] = useState(false);
	const { postId } = useParams();

	useEffect(() => {
		getRequest(`/post/${postId}`).then((response) => {
			setPost({ ...response });
			setFormData({ ...response });
		});
	}, [postId]);

	const handleInput = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
		setSuccesfullSubmit(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		putRequest(`/post/${postId}`, formData).then(setSuccesfullSubmit(true));
	};

	return !post ? (
		<p>Loading post</p>
	) : (
		<main>
			<div className="card">
				<h1>Edit post</h1>
				<form action="" onSubmit={handleSubmit}>
					<ul>
						<li>
							<label htmlFor="title">Title</label>
							<input
								type="text"
								id="title"
								name="title"
								placeholder={`${post.title} `}
								value={formData.title}
								onChange={handleInput}
							/>
						</li>
						<li>
							<label htmlFor="content">Content</label>
							<textarea
								id="content"
								name="content"
								placeholder={`${post.content} `}
								value={formData.content}
								onChange={handleInput}
							/>
						</li>

						{successfullSubmit ? (
							<li>
								<p>Saved!</p>
							</li>
						) : (
							<li>
								<button disabled={successfullSubmit}>Save</button>
							</li>
						)}
					</ul>
				</form>
			</div>
		</main>
	);
};
