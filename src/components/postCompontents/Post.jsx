import { Link, useNavigate } from "react-router-dom";
import { ProfileIcon } from "../General/ProfileIcon";
import { PropTypes } from "prop-types";
import { deleteRequest, getRequest } from "../../utilites/apiRequests";
import { useEffect, useState } from "react";
import { CommentsList } from "./CommentsList";

export const Post = ({ post, handleDeletePost }) => {
	const [postOwner, setPostOwner] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		getRequest(`/contact/${post.contactId}`)
			.then((postOwner) => {
				setPostOwner(postOwner);
			})
			.catch((error) => console.error("Failed to get post owner", error));
	}, [post.contactId]);

	const deletePost = () => {
		deleteRequest(`/post/${post.id}`).then(() => handleDeletePost());
	};

	const handleEditPost = () => {
		navigate(`/posts/${post.id}/edit`);
	};

	if (!postOwner) {
		return (
			<>
				<p>Loading posts</p>
			</>
		);
	} else {
		return (
			<div className="card">
				<div className="post border-bottom">
					<div className="post-header">
						<ProfileIcon user={postOwner} />
						<div className="post-details">
							<h2>{`${postOwner.firstName} ${postOwner.lastName}`}</h2>
							<Link to={`../posts/${post.id}`}>{post.title}</Link>
						</div>
						<div className="post-header-buttons">
							<button onClick={handleEditPost}>Edit</button>
							<button onClick={deletePost}>Delete</button>
						</div>
					</div>
					<p>{post.content}</p>
				</div>
				<CommentsList postId={post.id} />
			</div>
		);
	}
};

Post.propTypes = {
	post: PropTypes.object,
	handleDeletePost: PropTypes.func,
};
