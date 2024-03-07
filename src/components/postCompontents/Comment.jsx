import { useEffect, useState } from "react";
import { ProfileIcon } from "../General/ProfileIcon";
import PropTypes from "prop-types";
import { deleteRequest, getRequest } from "../../utilites/apiRequests";
import { useNavigate } from "react-router-dom";

export const Comment = ({ comment, handleDeleteComment }) => {
	const [commentOwner, setCommentOwner] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		getRequest(`/contact/${comment.contactId}`)
			.then((commentOwner) => {
				setCommentOwner(commentOwner);
			})
			.catch((error) => console.error("Failed to get comment owner", error));
	}, [comment.contactId]);

	const deletComment = () => {
		deleteRequest(`/post/${comment.postId}/comment/${comment.id}`).then(() =>
			handleDeleteComment()
		);
	};

	const handleEditComment = () => {
		navigate(`/posts/${comment.postId}/comments/${comment.id}/edit`);
	};

	return !commentOwner ? (
		<p>loading comment owner</p>
	) : (
		<div className="comment">
			<ProfileIcon user={commentOwner} />
			<div className="comment-content">
				<h2>{`${commentOwner.firstName} ${commentOwner.lastName}`}</h2>
				<p>{comment.content}</p>
				<button onClick={handleEditComment}>Edit</button>
				<button onClick={deletComment}>Delete</button>
			</div>
		</div>
	);
};

Comment.propTypes = {
	comment: PropTypes.object,
	handleDeleteComment: PropTypes.func,
};
