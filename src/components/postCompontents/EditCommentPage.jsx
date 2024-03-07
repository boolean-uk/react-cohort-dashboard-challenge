import { useParams } from "react-router-dom";
import { getRequest, putRequest } from "../../utilites/apiRequests";
import { useEffect, useState } from "react";

export const EditCommentPage = () => {
	const [comment, setComment] = useState(null);
	const [formData, setFormData] = useState(null);
	const [successfullSubmit, setSuccesfullSubmit] = useState(false);
	const { postId, commentId } = useParams();

	useEffect(() => {
		getRequest(`/post/${postId}/comment`).then((comments) => {
			const comment = comments.find(
				(comment) => comment.id.toString() === commentId.toString()
			);

			setComment({ ...comment });
			setFormData({ ...comment });
		});
	}, [postId, commentId]);

	const handleInput = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
		setSuccesfullSubmit(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("submitting");
		putRequest(`/post/${postId}/comment/${commentId}`, formData).then(
			setSuccesfullSubmit(true)
		);
	};

	return !comment ? (
		<p>Loading comment</p>
	) : (
		<>
			<form action="" onSubmit={handleSubmit}>
				<ul>
					<li>
						<textarea
							id="content"
							name="content"
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
