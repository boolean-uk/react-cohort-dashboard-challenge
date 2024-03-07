import { useParams } from "react-router-dom";
import { getRequest, putRequest } from "../../utilites/apiRequests";
import { useEffect, useState } from "react";

export const EditPostPage = () => {
	const [post, setPost] = useState(null);
	const [formData, setFormData] = useState(null);
	const [successfullSubmit, setSuccesfullSubmit] = useState(false);
	const { postId } = useParams();

	useEffect(() => {
		console.log("Effect");
		getRequest(`/post/${postId}`).then((response) => {
			setPost({ ...response });
			setFormData({ ...response });
		});
	}, [postId]);

	console.log(post);

	const handleInput = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
		setSuccesfullSubmit(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("submitting");
		putRequest(`/post/${postId}`, formData).then(setSuccesfullSubmit(true));
	};

	return !post ? (
		<p>Loading post</p>
	) : (
		<>
			<form action="" onSubmit={handleSubmit}>
				<ul>
					<li>
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
		</>
	);
};
